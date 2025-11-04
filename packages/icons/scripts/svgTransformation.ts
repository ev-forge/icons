import * as cheerio from 'cheerio';
import { optimize, Config as SvgoConfig } from 'svgo';
import { SvgTransform } from './svgTransform';

const svgoConfig: SvgoConfig = {
    plugins: [
        {
            name: 'preset-default',
            params: { overrides: { removeComments: false }, },
        },
        'removeViewBox'
    ],
};

export const transformSvg = (item: SvgTransform, targetSize: number): SvgTransform => {
    const $ = cheerio.load(item.content, { xmlMode: true });
    $('svg').attr('viewBox', `0 0 ${targetSize} ${targetSize}`);
    const finalContent = $.html();
    return { ...item, content: optimize(finalContent, svgoConfig).data };
}