import { longestIncreasingPath } from "./solution-stack";

it("longestIncreasingPath should return 4 for matrix = [[9,9,4],[6,6,8],[2,1,1]]", () => {
  const matrix = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
  ];
  expect(longestIncreasingPath(matrix)).toBe(4);
});

it("longestIncreasingPath should return 4 for matrix = [[3,4,5],[3,2,6],[2,2,1]]", () => {
  const matrix = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ];
  expect(longestIncreasingPath(matrix)).toBe(4);
});

it("longestIncreasingPath should return 1 for matrix = [[1]]", () => {
  const matrix = [[1]];
  expect(longestIncreasingPath(matrix)).toBe(1);
});

it("longestIncreasingPath should return 4 for matrix = [[3,4,5],[3,2,6],[2,2,1]]", () => {
  const matrix = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ];
  expect(longestIncreasingPath(matrix)).toBe(4);
});

it("longestIncreasingPath should return 5 for matrix = [[9,9,2],[4,6,8],[2,1,1]]", () => {
  const matrix = [
    [9, 9, 2],
    [4, 6, 8],
    [2, 1, 1],
  ];
  expect(longestIncreasingPath(matrix)).toBe(5);
});

it("longestIncreasingPath should return 9 for matrix = [[1,2,3],[8,9,4],[7,6,5]]", () => {
  const matrix = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ];
  expect(longestIncreasingPath(matrix)).toBe(9);
});

it("longestIncreasingPath should return 9 for matrix = [[3,2,1],[4,9,8],[5,6,7]]", () => {
  const matrix = [
    [3, 2, 1],
    [4, 9, 8],
    [5, 6, 7],
  ];
  expect(longestIncreasingPath(matrix)).toBe(9);
});
