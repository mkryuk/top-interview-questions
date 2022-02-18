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

it("merge should return [[1,7]] for intervals = [[1,4],[4,5],[2,7]]", () => {
  const intervals = [
    [1, 4],
    [4, 5],
    [2, 7],
  ];
  const result = merge(intervals);
  expect(result).toEqual([[1, 7]]);
});

it("merge should return [[1,4]] for intervals = [[1,4]]", () => {
  const intervals = [[1, 4]];
  const result = merge(intervals);
  expect(result).toEqual([[1, 4]]);
});

it("merge should return [[1,4], [5,8]] for intervals = [[1,4], [5,8]]", () => {
  const intervals = [
    [1, 4],
    [5, 8],
  ];
  const result = merge(intervals);
  expect(result).toEqual([
    [1, 4],
    [5, 8],
  ]);
});
