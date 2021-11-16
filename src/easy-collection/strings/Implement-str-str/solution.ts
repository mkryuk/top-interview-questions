export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  let result = -1;
  for (let i = 0; i < haystack.length; i++) {
    let ti = i;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[ti] !== needle[j]) {
        result = -1;
        break;
      }
      if (result === -1) {
        result = i;
      }
      ti++;
    }
    if (result !== -1) {
      return result;
    }
  }
  return result;
}
