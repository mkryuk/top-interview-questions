import { solution } from "./solution";

it("solution should return 1 for graph = [[1,1,0],[0,1,0],[1,1,1]]", () => {
  expect(
    solution([
      [1, 1, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]),
  ).toEqual(1);
});

it("solution should return -1 for graph = [[1,0,1],[1,1,0],[0,1,1]]", () => {
  expect(
    solution([
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 1],
    ]),
  ).toEqual(-1);
});
