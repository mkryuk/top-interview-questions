import { rotate } from "./solution";

it("should rotate matrix 1", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const result = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ];
  rotate(matrix);
  expect(matrix).toEqual(result);
});

it("should rotate matrix 2", () => {
  const matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ];
  const result = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ];
  rotate(matrix);
  expect(matrix).toEqual(result);
});

it("should rotate matrix 3", () => {
  const matrix = [[1]];
  const result = [[1]];
  rotate(matrix);
  expect(matrix).toEqual(result);
});

it("should rotate matrix 4", () => {
  const matrix = [
    [1, 2],
    [3, 4],
  ];
  const result = [
    [3, 1],
    [4, 2],
  ];
  rotate(matrix);
  expect(matrix).toEqual(result);
});
