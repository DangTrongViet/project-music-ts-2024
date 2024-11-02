import unidecode from "unidecode";

export const convertToSLug = (text: string): string => {
    const unidecodeText = unidecode(text.trim());

    const slug: string = unidecodeText.replace(/\s+/g, "-");
    
    return slug;
}