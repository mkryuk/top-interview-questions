import { minAreaRect } from "./solution";

it("minAreaRect should return 4 for points = [[1,1],[1,3],[3,1],[3,3],[2,2]]", () => {
  const points = [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [2, 2],
  ];
  const result = minAreaRect(points);
  expect(result).toEqual(4);
});

it("minAreaRect should return 2 for points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]", () => {
  const points = [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
    [4, 1],
    [4, 3],
  ];
  const result = minAreaRect(points);
  expect(result).toEqual(2);
});
