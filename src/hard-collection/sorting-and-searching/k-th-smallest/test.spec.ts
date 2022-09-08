import { kthSmallest } from "./solution";

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
