export function longestCommonPrefix(strs: string[]): string {
  let shortestStr = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < shortestStr) {
      shortestStr = strs[i].length;
    }
  }

  let result = "";
  let temp = "";
  let mismatch = false;
  for (let i = 0; i < shortestStr; i++) {
    temp = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== temp) {
        mismatch = true;
        break;
      }
    }
    if (!mismatch) {
      result += temp;
    }
  }
  return result;
}
