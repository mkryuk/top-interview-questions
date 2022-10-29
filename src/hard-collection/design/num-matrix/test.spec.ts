import { NumMatrix } from "./solution";

it("NumMatrix should pass test 1", () => {
  const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ];
  var numMatrix = new NumMatrix(matrix);
  numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e. sum of the left red rectangle)
  numMatrix.update(3, 2, 2); // matrix changes from left image to right image
  numMatrix.sumRegion(2, 1, 4, 3); // return 10 (i.e. sum of the right red rectangle)
});
