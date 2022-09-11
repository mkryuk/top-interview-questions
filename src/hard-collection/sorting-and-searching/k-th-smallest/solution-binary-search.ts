export function kthSmallest(matrix: number[][], k: number): number {
  let n = matrix.length;
  let start = matrix[0][0];
  let end = matrix[n - 1][n - 1];
  while (start < end) {
    let mid = start + Math.trunc((end - start) / 2);
    // first number is the smallest and the second number is the largest
    let smallLargePair = [matrix[0][0], matrix[n - 1][n - 1]];
    let count = countLessEqual(matrix, mid, smallLargePair);

    if (count == k) {
      return smallLargePair[0];
    }

    if (count < k) {
      // search higher
      start = smallLargePair[1];
    } else {
      // search lower
      end = smallLargePair[0];
    }
  }
  return start;
}

function countLessEqual(
  matrix: number[][],
  mid: number,
  smallLargePair: number[],
): number {
  const n = matrix.length;
  let count = 0;
  let row = n - 1;
  let col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] > mid) {
      // as matrix[row][col] is bigger than the mid, let's keep track of the
      // smallest number greater than the mid
      smallLargePair[1] = Math.min(smallLargePair[1], matrix[row][col]);
      row--;
    } else {
      // as matrix[row][col] is less than or equal to the mid, let's keep track of the
      // biggest number less than or equal to the mid
      smallLargePair[0] = Math.max(smallLargePair[0], matrix[row][col]);
      count += row + 1;
      col++;
    }
  }

  return count;
}
