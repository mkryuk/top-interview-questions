import { setZeroes } from "./solution";

it("setZeroes should modify matrix = [[1,1,1],[1,0,1],[1,1,1]] to [[1,0,1],[0,0,0],[1,0,1]]", function () {
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);
});

it("setZeroes should modify matrix = [[0,1]] to [[0,0]]", function () {
  const matrix = [[0, 1]];
  setZeroes(matrix);
  expect(matrix).toEqual([[0, 0]]);
});

it("setZeroes should modify matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] to [[0,0,0,0],[0,4,5,0],[0,3,1,0]]", function () {
  const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0],
  ]);
});

it("setZeroes should modify matrix = [[0,1,1,0],[1,1,1,1],[1,1,0,1],[1,1,1,1],]to[[0,0,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],]", function () {
  const matrix = [
    [0, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ];
  setZeroes(matrix);
  expect(matrix).toEqual([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ]);
});
