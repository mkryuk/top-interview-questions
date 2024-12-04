export function canMakeSubsequence(str1: string, str2: string): boolean {
  let str2Index = 0;
  for (let i = 0; i < str1.length && str2Index < str2.length; i++) {
    const incCharCode = str1.charCodeAt(i) + 1 > 122 ? 97 : str1.charCodeAt(i) + 1;
    if (str1[i] === str2[str2Index] || incCharCode === str2.charCodeAt(str2Index)) {
      str2Index++;
    }
  }
  return str2Index === str2.length ? true : false;
}
