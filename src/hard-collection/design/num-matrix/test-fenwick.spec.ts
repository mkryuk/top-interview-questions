import { NumMatrix } from "./solution-fenwick";

it("NumMatrix should pass test 1", () => {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ];
  var numMatrix = new NumMatrix(matrix);
  expect(numMatrix.sumRegion(2, 1, 4, 3)).toEqual(8); // return 8 (i.e. sum of the left red rectangle)
  numMatrix.update(3, 2, 2); // matrix changes from left image to right image
  expect(numMatrix.sumRegion(2, 1, 4, 3)).toEqual(10); // return 10 (i.e. sum of the right red rectangle)
});

it("NumMatrix should pass test 2", () => {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ];
  var numMatrix = new NumMatrix(matrix);
  expect(numMatrix.sumRegion(0, 0, 2, 2)).toEqual(21);
  expect(numMatrix.sumRegion(2, 2, 4, 4)).toEqual(22);
  numMatrix.update(2, 2, 3);
  expect(numMatrix.sumRegion(0, 0, 2, 2)).toEqual(24);
  expect(numMatrix.sumRegion(2, 2, 4, 4)).toEqual(25);
});

it("NumMatrix should pass test 3", () => {
  const matrix = [
    [1, 0, 0, 0, 1],
    [2, 1, 1, 1, 2],
    [3, 1, 1, 1, 3],
    [4, 1, 1, 1, 4],
    [5, 5, 5, 5, 5],
  ];
  var numMatrix = new NumMatrix(matrix);
  expect(numMatrix.sumRegion(0, 0, 2, 2)).toEqual(10);
  expect(numMatrix.sumRegion(1, 1, 3, 3)).toEqual(9);
  numMatrix.update(2, 2, 3);
  expect(numMatrix.sumRegion(1, 1, 3, 3)).toEqual(11);
});
