import * as crypto from 'crypto';
import { SvgTransform } from './svgTransform';

type SvgWithHash = SvgTransform & { hash: string }
export const addContentHashToIcons = (icons: SvgTransform[]): SvgWithHash[] => {
    return icons.map(icon => {
        const hash = crypto
            .createHash('sha256')
            .update(icon.content)
            .digest('hex');

        return { ...icon, hash };
    });
};