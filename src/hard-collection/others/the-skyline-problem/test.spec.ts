import { getSkyline } from "./solution";

it("getSkyline should return [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]] for buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]", () => {
  const buildings = [
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ];
  const result = getSkyline(buildings);
  expect(result).toEqual([
    [2, 10],
    [3, 15],
    [7, 12],
    [12, 0],
    [15, 10],
    [20, 8],
    [24, 0],
  ]);
});

it("getSkyline should return [[0,3],[5,0]] for buildings = [[0,2,3],[2,5,3]]", () => {
  const buildings = [
    [0, 2, 3],
    [2, 5, 3],
  ];
  const result = getSkyline(buildings);
  expect(result).toEqual([
    [0, 3],
    [5, 0],
  ]);
});
