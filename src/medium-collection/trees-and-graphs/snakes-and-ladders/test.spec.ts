import { snakesAndLadders } from "./solution";

it("snakesAndLadders should pass test 1", () => {
  const board = [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(4);
});

it("snakesAndLadders should pass test 2", () => {
  const board = [
    [-1, -1],
    [-1, 3],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(1);
});
