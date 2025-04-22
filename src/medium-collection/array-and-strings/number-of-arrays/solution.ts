export function numberOfArrays(differences: number[], lower: number, upper: number): number {
  let minNum = 0;
  let maxNum = 0;
  let num = 0;
  for (const diff of differences) {
    num += diff;
    minNum = Math.min(minNum, num);
    maxNum = Math.max(maxNum, num);
  }

  let lowerDiff = lower - minNum;
  let upperDiff = upper - maxNum;
  return Math.max(0, upperDiff - lowerDiff + 1);
}
