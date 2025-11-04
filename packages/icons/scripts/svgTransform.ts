import * as cheerio from 'cheerio';
import { parseSVG, makeAbsolute } from 'svg-path-parser';
import SvgPath from 'svgpath';
import { SvgResult } from './svgAnalysis.utils';

export type Transformation = {
    scale: number;
    translateX: number;
    translateY: number;
}

export type SvgTransform = SvgResult & { transformation: Transformation }

export const calculateTransformation = (
    svgData: SvgResult,
    targetSize: number = 512
): SvgTransform => {
    const $ = cheerio.load(svgData.content, { xmlMode: true });

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let hasVisibleContent = false;

    $('path').each((_, element) => {
        const dAttr = $(element).attr('d');
        if (!dAttr) return;

        try {
            const commands = makeAbsolute(parseSVG(dAttr));

            // ℹ️: will iterate across cmd which contains coordinates (L) and control points of curves (C)(x1, y1, x2, y2)
            for (const cmd of commands) {
                const coordsToCheck: { x?: number; y?: number }[] = [cmd];
                if ('x1' in cmd && 'y1' in cmd) coordsToCheck.push({ x: cmd.x1, y: cmd.y1 });
                if ('x2' in cmd && 'y2' in cmd) coordsToCheck.push({ x: cmd.x2, y: cmd.y2 });

                for (const point of coordsToCheck) {
                    if (typeof point.x === 'number' && typeof point.y === 'number') {
                        hasVisibleContent = true;
                        minX = Math.min(minX, point.x);
                        minY = Math.min(minY, point.y);
                        maxX = Math.max(maxX, point.x);
                        maxY = Math.max(maxY, point.y);
                    }
                }
            }
        } catch (error) {
            console.warn(`Could not parse path data in one of the SVGs.`);
        }
    });

    if (!hasVisibleContent) {
        return { ...svgData, transformation: { scale: 1, translateX: 0, translateY: 0 } };
    }

    const contentWidth = maxX - minX;
    const contentHeight = maxY - minY;

    if (contentWidth === 0 && contentHeight === 0) {
        return {
            ...svgData, transformation: {
                scale: 1,
                translateX: (targetSize / 2) - minX,
                translateY: (targetSize / 2) - minY
            }
        };
    }

    // 1. Calculate Scale
    const scale = Math.min(targetSize / contentWidth, targetSize / contentHeight);

    // 2. Calculate Translation
    const scaledWidth = contentWidth * scale;
    const scaledHeight = contentHeight * scale;

    const translateX = (targetSize - scaledWidth) / 2 - (minX * scale);
    const translateY = (targetSize - scaledHeight) / 2 - (minY * scale);

    return { ...svgData, transformation: { scale, translateX, translateY } };
}

export function applyTransformation(
    svgData: SvgTransform
): SvgTransform {
    const $ = cheerio.load(svgData.content, { xmlMode: true });

    const transformString = `translate(${svgData.transformation.translateX}, ${svgData.transformation.translateY}) scale(${svgData.transformation.scale})`;

    $('path').each((_, element) => {
        const pathElement = $(element);
        const dAttr = pathElement.attr('d');

        if (dAttr) {
            try {
                const transformedD = new SvgPath(dAttr)
                    .transform(transformString)
                    .toString();

                pathElement.attr('d', transformedD);
            } catch (error) {
                console.warn(`Skipping transformation for invalid path data: ${dAttr.substring(0, 30)}...`);
            }
        }
    })
    return { ...svgData, content: $.html() }
}