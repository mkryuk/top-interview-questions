import { solve } from "./solution";

it("solve should correctly find surrounded regions for case 1", function () {
  let board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ];
  let expected = [
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
  ];
  solve(board);
  expect(board).toEqual(expected);
});

it("solve should correctly find surrounded regions for case 2", function () {
  let board = [
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
  ];
  let expected = [
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
  ];
  solve(board);
  expect(board).toEqual(expected);
});

it("solve should correctly find surrounded regions for case 3", function () {
  let board = [["X"]];
  let expected = [["X"]];
  solve(board);
  expect(board).toEqual(expected);
});
