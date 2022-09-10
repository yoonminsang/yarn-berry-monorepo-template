export const isNumber = (value: string) => /^[0-9]*$/.test(value);
export const isAlphabet = (value: string) => /^[a-zA-Z]*$/.test(value);
export const isKorean = (value: string) => /^[가-힣]*$/.test(value);
