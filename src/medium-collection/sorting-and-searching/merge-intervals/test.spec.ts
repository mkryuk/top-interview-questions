import { merge } from "./solution";

it("merge should return [[1,6],[8,10],[15,18]] for intervals = [[1,3],[2,6],[8,10],[15,18]]", () => {
  const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];
  const result = merge(intervals);
  expect(result).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

it("merge should return [[1,5]] for intervals = [[1,4],[4,5]]", () => {
  const intervals = [
    [1, 4],
    [4, 5],
  ];
  const result = merge(intervals);
  expect(result).toEqual([[1, 5]]);
});
