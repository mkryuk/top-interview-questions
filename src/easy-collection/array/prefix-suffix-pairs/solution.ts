export function countPrefixSuffixPairs(words: string[]): number {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        result++;
      }
    }
  }
  return result;
}

function isPrefixAndSuffix(str1: string, str2: string): boolean {
  if (str1.length > str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] || str1[str1.length - 1 - i] !== str2[str2.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
