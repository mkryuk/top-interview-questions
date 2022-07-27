import { longestIncreasingPath } from "./solution";

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

it("longestIncreasingPath should return 2 for matrix = [[3,4,5],[3,2,6],[2,2,1]]", () => {
  const matrix = [
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1],
  ];
  expect(longestIncreasingPath(matrix)).toBe(2);
});
