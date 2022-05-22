import { spiralOrder } from "./solution-no-direction";

it("spiralOrder should return [1,2,3,6,9,8,7,4,5] for matrix = [[1,2,3],[4,5,6],[7,8,9]]", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

it("spiralOrder should return [1,2,3,4,8,12,11,10,9,5,6,7] for matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

it("spiralOrder should return [1] for matrix = [[1]]", () => {
  const matrix = [[1]];
  expect(spiralOrder(matrix)).toEqual([1]);
});

it("spiralOrder should return [3,2] for matrix = [[3],[2]]", () => {
  const matrix = [[3], [2]];
  expect(spiralOrder(matrix)).toEqual([3, 2]);
});

it("spiralOrder should return [3,2] for matrix = [[3],[2]]", () => {
  const matrix = [[3, 2]];
  expect(spiralOrder(matrix)).toEqual([3, 2]);
});
