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

it("snakesAndLadders should pass test 3", () => {
  const board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(2);
});

it("snakesAndLadders should pass test 4", () => {
  const board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, 9, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(1);
});

it("snakesAndLadders should pass test 5", () => {
  const board = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, 9, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(1);
});

it("snakesAndLadders should pass test 6", () => {
  const board = [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [16, -1, -1, -1],
    [-1, -1, -1, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(2);
});

it("snakesAndLadders should pass test 7", () => {
  const board = [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, 16, -1, -1],
    [-1, -1, -1, -1],
  ];
  const result = snakesAndLadders(board);
  expect(result).toEqual(1);
});
