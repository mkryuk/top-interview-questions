export function kthSmallest(matrix: number[][], k: number): number {
  let sortedList: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    sortedList = sortedList.concat(matrix[i]);
  }
  sortedList.sort((a, b) => a - b);
  return sortedList[k - 1];
}
