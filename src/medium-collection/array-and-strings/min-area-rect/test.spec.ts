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

it("minAreaRect should return 1 for test 3", () => {
  const points = [
    [1, 2],
    [6, 4],
    [6, 2],
    [3, 4],
    [5, 2],
    [2, 2],
    [2, 3],
    [3, 2],
    [3, 3],
    [3, 5],
    [5, 4],
  ];
  const result = minAreaRect(points);
  expect(result).toEqual(1);
});

it("minAreaRect should return 1 for test 4", () => {
  const points = [
    [3, 2],
    [3, 1],
    [4, 4],
    [1, 1],
    [4, 3],
    [0, 3],
    [0, 2],
    [4, 0],
  ];
  const result = minAreaRect(points);
  expect(result).toEqual(0);
});
