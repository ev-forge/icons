export const toCamelCase = (str: string): string => str
    .replace(/-./g, match => match.charAt(1).toUpperCase())
    .replace(/^./, match => match.toLowerCase());

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);