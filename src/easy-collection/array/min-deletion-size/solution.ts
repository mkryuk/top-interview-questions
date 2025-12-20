export function minDeletionSize(strs: string[]): number {
  let result = 0;
  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 1; row < strs.length; row++) {
      if (strs[row - 1][col] > strs[row][col]) {
        result++;
        break;
      }
    }
  }
  return result;
}
