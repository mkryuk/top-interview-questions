export function removeCoveredIntervals(intervals: number[][]): number {
  let sortedByLeft = [...intervals].sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let sortedByRight = [...intervals].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  let result = 0;
  let lIndex = 0;
  let rIndex = 0;
  while (lIndex < sortedByLeft.length && rIndex < sortedByRight.length) {
    if (
      sortedByLeft[lIndex][0] === sortedByRight[rIndex][0] &&
      sortedByLeft[lIndex][1] === sortedByRight[rIndex][1]
    ) {
      result++;
      lIndex++;
      rIndex++;
    } else if (sortedByLeft[lIndex][0] < sortedByRight[rIndex][0]) {
      rIndex++;
    } else {
      lIndex++;
    }
  }
  return result;
}
