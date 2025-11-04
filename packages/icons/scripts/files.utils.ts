import { readdirSync, readFileSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { capitalize, toCamelCase } from "./others";

export type FileData = {
    content: string;
    filePath: string;
    name: string
}

export const readFilesContent = (filesPath: string): FileData[] => {
    const files = readdirSync(filesPath)
        .filter(file => file.endsWith('.svg'));
    if (files.length === 0) return []

    return files.map(file => {
        const filePath = path.join(filesPath, file);
        const svgContent = readFileSync(filePath, 'utf-8');
        const name = file.replace(".svg", "")
        const fixedName = capitalize(toCamelCase(name))
        return { content: svgContent, filePath, name: fixedName }
    })
}

interface FileToWrite {
    name: string; // ℹ️ ex: icon.svg
    content: string;
}
export const writeFilesContent = async (dir: string, files: FileToWrite[]): Promise<void> => {
    const absoluteDir = path.resolve(__dirname, dir);
    await mkdir(absoluteDir, { recursive: true });
    const writePromises = files.map(file => {
        const filePath = path.join(absoluteDir, file.name);
        return writeFile(filePath, file.content, 'utf-8');
    });
    await Promise.all(writePromises);
};

export const saveObjectArrayToFile = async (filePath: string, data: any[]): Promise<void> => {
    try {
        const content = JSON.stringify(data, null, 2);

        const dir = path.dirname(filePath);
        await mkdir(dir, { recursive: true });

        await writeFile(filePath, content, 'utf-8');

    } catch (error) {
        console.error(`❌ Failed to save data to ${filePath}`);
        throw error;
    }
};