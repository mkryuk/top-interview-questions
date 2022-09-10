import { kthSmallest } from "./solution-bf";

it("kthSmallest should return 13 for matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8", () => {
  const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ];
  const k = 8;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(13);
});

it("kthSmallest should return -5 for matrix = [[-5]], k = 1", () => {
  const matrix = [[-5]];
  const k = 1;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(-5);
});

it("kthSmallest should return 17 for matrix = [[1,5,9],[8,10,20],[15,17,21]], k = 7", () => {
  const matrix = [
    [1, 5, 9],
    [8, 10, 20],
    [15, 17, 21],
  ];
  const k = 7;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(17);
});

it("kthSmallest should return 7 for matrix = [[1,2,3],[4,5,6],[7,8,9]], k = 7", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const k = 7;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(7);
});

it("kthSmallest should return 7 for matrix = [[1,4,7],[2,5,8],[3,6,9]], k = 7", () => {
  const matrix = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  const k = 7;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(7);
});

it("kthSmallest should return 7 for matrix = [[1,2,7],[3,4,8],[5,6,9]], k = 7", () => {
  const matrix = [
    [1, 2, 7],
    [3, 4, 8],
    [5, 6, 9],
  ];
  const k = 7;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(7);
});

it("kthSmallest should return 7 for matrix = [[1,3,6],[2,5,8],[4,7,9]], k = 7", () => {
  const matrix = [
    [1, 3, 6],
    [2, 5, 8],
    [4, 7, 9],
  ];
  const k = 7;
  const result = kthSmallest(matrix, k);
  expect(result).toEqual(7);
});
