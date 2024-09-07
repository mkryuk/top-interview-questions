export function maxLength(arr: string[]): number {
  let result = backtrack(arr, 0, "", 0);
  return result;
}

function backtrack(arr: string[], index: number, current: string, maxLen: number): number {
  if (index === arr.length) {
    return Math.max(maxLen, current.length);
  }

  maxLen = Math.max(backtrack(arr, index + 1, current, maxLen), maxLen);
  if (isUniqueSubsequence(current, arr[index])) {
    maxLen = Math.max(backtrack(arr, index + 1, current + arr[index], maxLen), maxLen);
  }
  return maxLen;
}

function isUniqueSubsequence(current: string, add: string): boolean {
  let charSet = new Set(current);
  for (const char of add) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
