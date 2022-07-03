import { solve } from "./solution";

it('solve should return [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]] for board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]', function () {
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

it('solve should return board = [["X"]] for board = [["X"]]', function () {
  let board = [["X"]];
  let expected = [["X"]];
  solve(board);
  expect(board).toEqual(expected);
});
