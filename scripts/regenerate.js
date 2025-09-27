// scripts/generate-icons.js
const fs = require('fs');
const path = require('path');

const ICONS_SOURCE_DIR = path.resolve(__dirname, '../packages/ev-icon/src/assets');
const OUTPUT_DIR = path.resolve(__dirname, '../packages/ev-icon/src/generated');
const ICON_CATEGORIES = ['brands', 'regular', 'solid'];

function main() {
    console.log(`🔍 [1/4]scanning icons`);

    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

    const allIcons = {};
    for (const category of ICON_CATEGORIES) {
        const categoryPath = path.join(ICONS_SOURCE_DIR, category);
        try {
            const files = fs.readdirSync(categoryPath);
            allIcons[category] = files
                .filter(file => file.endsWith('.svg'))
                .map(file => ({
                    name: path.basename(file, '.svg'),
                    path: `../assets/${category}/${file}`
                }))
                .sort((a, b) => a.name.localeCompare(b.name));
        } catch (error) {
            console.error(`❌ Can not read the folder: ${categoryPath}`);
            process.exit(1);
        }
    }


    generateTypeFiles(OUTPUT_DIR, ICON_CATEGORIES, allIcons);
    console.log("✅ [2/4] types generated");
    generateMetadataFiles(OUTPUT_DIR, ICON_CATEGORIES, allIcons);
    console.log("✅ [3/4] data generated");
    console.log("🎉 [4/4] files at ev-icon/src/generated");
}

function generateTypeFiles(outputDir, categories, allIcons) {
    const warningHeader = `// 🚨 File generated, don't edit\n\n`;

    // 1. create files by category
    for (const category of categories) {
        const typeName = `${category.charAt(0).toUpperCase() + category.slice(1)}Type`;
        const icons = allIcons[category];
        const typeValues = icons.length > 0 ? icons.map(icon => `'${icon.name}'`).join(' | ') : 'never';
        const content = `${warningHeader}export type ${typeName} = ${typeValues};\n`;
        fs.writeFileSync(path.join(outputDir, `${category}.types.ts`), content);
    }

    // 2. create 'types.ts' importing the all the categories
    let aggregatorContent = `${warningHeader}import type { BrandsType } from './brands.types';\n`;
    aggregatorContent += `import type { RegularType } from './regular.types';\n`;
    aggregatorContent += `import type { SolidType } from './solid.types';\n\n`;
    aggregatorContent += `export type { BrandsType, RegularType, SolidType };\n\n`;
    aggregatorContent += `export type IconName = BrandsType | RegularType | SolidType;\n`;
    fs.writeFileSync(path.join(outputDir, 'types.ts'), aggregatorContent);
}


function generateMetadataFiles(outputDir, categories, allIcons) {
    const warningHeader = `// 🚨 File generated, don't edit\n\n`;

    // 1. create files by category
    for (const category of categories) {
        const typeName = `${category.charAt(0).toUpperCase() + category.slice(1)}Type`;
        const objectName = `${category}Icons`;

        let content = `${warningHeader}import type { ${typeName} } from './${category}.types';\n\n`;
        content += `export const ${objectName}: Record<${typeName}, string> = {\n`;
        for (const icon of allIcons[category]) {
            content += `  '${icon.name}': '${icon.path}',\n`;
        }
        content += `};\n`;
        fs.writeFileSync(path.join(outputDir, `${category}.metadata.ts`), content);
    }

    // 2. create 'metadata.ts' importing all the categories
    let aggregatorContent = `${warningHeader}import { brandsIcons } from './brands.metadata';\n`;
    aggregatorContent += `import { regularIcons } from './regular.metadata';\n`;
    aggregatorContent += `import { solidIcons } from './solid.metadata';\n\n`;
    aggregatorContent += `export const iconMetadata = {\n  brands: brandsIcons,\n  regular: regularIcons,\n  solid: solidIcons,\n};\n`;
    fs.writeFileSync(path.join(outputDir, 'metadata.ts'), aggregatorContent);
}

main();