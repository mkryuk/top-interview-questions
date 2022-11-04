import { maxPoints } from "./solution";

it("maxPoints should return 3 for points = [[1,1],[2,2],[3,3]]", () => {
  const points = [
    [1, 1],
    [2, 2],
    [3, 3],
  ];
  const result = maxPoints(points);
  expect(result).toEqual(3);
});

it("maxPoints should return 4 for points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]", () => {
  const points = [
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ];
  const result = maxPoints(points);
  expect(result).toEqual(4);
});
