import { minTime } from "./solution";

it("minTime should return 8 for test 1", () => {
  const n = 7;
  const edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ];
  const hasApple = [false, false, true, false, true, true, false];
  const result = minTime(n, edges, hasApple);
  expect(result).toEqual(8);
});

it("minTime should return 6 for test 2", () => {
  const n = 7;
  const edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ];
  const hasApple = [false, false, true, false, false, true, false];
  const result = minTime(n, edges, hasApple);
  expect(result).toEqual(6);
});

it("minTime should return 0 for test 3", () => {
  const n = 7;
  const edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ];
  const hasApple = [false, false, false, false, false, false, false];
  const result = minTime(n, edges, hasApple);
  expect(result).toEqual(0);
});

it("minTime should return 10 for test 4", () => {
  const n = 7;
  const edges = [
    [0, 1],
    [0, 3],
    [1, 4],
    [1, 5],
    [2, 3],
    [3, 6],
  ];
  const hasApple = [false, false, true, true, true, true, false];
  const result = minTime(n, edges, hasApple);
  expect(result).toEqual(10);
});
