import { findWinners } from "./solution";

it("findWinners should pass test 1", () => {
  const matches = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ];
  const result = findWinners(matches);
  expect(result).toEqual([
    [1, 2, 10],
    [4, 5, 7, 8],
  ]);
});

it("findWinners should pass test 2", () => {
  const matches = [
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
  ];
  const result = findWinners(matches);
  expect(result).toEqual([[1, 2, 5, 6], []]);
});
