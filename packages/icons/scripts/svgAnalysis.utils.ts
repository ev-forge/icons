import * as cheerio from 'cheerio';
import { FileData } from './files.utils';

export type SvgIssue = {
    type: 'Attribute' | 'Security' | 'Style' | 'Comment';
    message: string;
}
export type SvgResult = FileData & {
    issues: SvgIssue[]
}

export const analyzeSvg = (fileData: FileData): SvgResult => {
    const issues: SvgIssue[] = [];
    const $ = cheerio.load(fileData.content, {
        xmlMode: true, // ℹ️ Important: Use XML mode for SVG compatibility
    });

    const svg = $('svg').first();

    if (svg.attr('width'))
        issues.push({ type: 'Attribute', message: `Found 'width' attribute` });
    if (svg.attr('height'))
        issues.push({ type: 'Attribute', message: `Found 'height' attribute` });
    if (svg.attr('style'))
        issues.push({ type: 'Attribute', message: `Found 'style' attribute` });
    if ($('script').length > 0)
        issues.push({ type: 'Security', message: `Found <script> tag(s)` });

    // ℹ️ Check for comments, ignoring the Font Awesome license
    $('*')
        .contents()
        .filter((_, el) => el.type === 'comment')
        .each((_, el) => {
            const commentNode = el;
            const commentText = commentNode.data || '';
            if (!commentText.includes('Font Awesome')) {
                issues.push({ type: 'Comment', message: `Found non-standard comment.` });
            }
        });

    // ℹ️ Check for hardcoded fill colors
    $('[fill]').each((_, el) => {
        const element = $(el);
        const fillValue = element.attr('fill')?.toLowerCase();
        if (fillValue && fillValue !== 'none' && fillValue !== 'currentcolor') {
            issues.push({ type: 'Style', message: `Found hardcoded fill="${element.attr('fill')}".` });
        }
    });

    return { ...fileData, issues }
}



export const cleanSvg = async (svgContent: string): Promise<string> => {
    const $ = cheerio.load(svgContent, { xmlMode: true });

    const svgRoot = $('svg').first();
    svgRoot.removeAttr('width');
    svgRoot.removeAttr('height');
    svgRoot.removeAttr('style');

    $('script').remove();

    $('*')
        .contents()
        .filter((_, el) => el.type === 'comment')
        .each((_, el) => {
            const commentText = (el as { data: string }).data || '';
            if (!commentText.includes('Font Awesome')) {
                $(el).remove();
            }
        });

    $('[fill]').each((_, el) => {
        const element = $(el);
        const fillValue = element.attr('fill')?.toLowerCase();

        const shouldFixFill = fillValue && fillValue !== 'none' && fillValue !== 'currentcolor'
        if (shouldFixFill) element.attr('fill', 'currentColor');
    });

    return $.html();
}

