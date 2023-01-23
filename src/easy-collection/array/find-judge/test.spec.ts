import { findJudge } from "./solution";

it("findJudge should return 2 for n = 2, trust = [[1,2]]", () => {
  const n = 2;
  const trust = [[1, 2]];
  const result = findJudge(n, trust);
  expect(result).toEqual(2);
});

it("findJudge should return 3 for n = 2, trust = [[1,2]]", () => {
  const n = 2;
  const trust = [[1, 2]];
  const result = findJudge(n, trust);
  expect(result).toEqual(3);
});

it("findJudge should return -1 for n = 3, trust = [[1,3],[2,3],[3,1]]", () => {
  const n = 3;
  const trust = [
    [1, 3],
    [2, 3],
    [3, 1],
  ];
  const result = findJudge(n, trust);
  expect(result).toEqual(2);
});
