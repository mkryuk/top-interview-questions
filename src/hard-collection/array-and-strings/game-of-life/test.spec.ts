import { gameOfLife } from "./solution";

it("gameOfLife should modify board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]] to [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]", () => {
  const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];
  gameOfLife(board);
  expect(board).toEqual([
    [0, 0, 0],
    [1, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ]);
});

it("gameOfLife should modify board = [[1,1],[1,0]] to [[1,1],[1,1]]", () => {
  const board = [
    [1, 1],
    [1, 0],
  ];
  gameOfLife(board);
  expect(board).toEqual([
    [1, 1],
    [1, 1],
  ]);
});
