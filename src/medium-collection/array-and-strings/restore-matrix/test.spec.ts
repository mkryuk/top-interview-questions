import { restoreMatrix } from "./solution";

describe("Find Valid Matrix Given Row and Column Sums", () => {
  it("restoreMatrix should return valid matrix for rowSum = [3,8], colSum = [4,7]", () => {
    const rowSum = [3, 8];
    const colSum = [4, 7];
    const result = restoreMatrix(rowSum, colSum);
    const resultRowSum = findRowSum(result);
    const resultColSum = findColSum(result);
    expect(rowSum).toEqual(resultRowSum);
    expect(colSum).toEqual(resultColSum);
  });

  it("restoreMatrix should return valid matrix for rowSum = [5,7,10], colSum = [8,6,8]", () => {
    const rowSum = [5, 7, 10];
    const colSum = [8, 6, 8];
    const result = restoreMatrix(rowSum, colSum);
    const resultRowSum = findRowSum(result);
    const resultColSum = findColSum(result);
    expect(rowSum).toEqual(resultRowSum);
    expect(colSum).toEqual(resultColSum);
  });
});

function findRowSum(matrix: number[][]): number[] {
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    let rowSum = 0;
    for (const num of matrix[row]) {
      rowSum += num;
    }
    result.push(rowSum);
  }
  return result;
}

function findColSum(matrix: number[][]): number[] {
  const result = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }
    result.push(colSum);
  }
  return result;
}
