import { TicTacToe } from "./o1-solution";

it("should pass game 1", () => {
  const ticTacToe = new TicTacToe(3);
  expect(ticTacToe.move(0, 0, 1)).toBe(0);
  expect(ticTacToe.move(0, 2, 2)).toBe(0);
  expect(ticTacToe.move(2, 2, 1)).toBe(0);
  expect(ticTacToe.move(1, 1, 2)).toBe(0);
  expect(ticTacToe.move(2, 0, 1)).toBe(0);
  expect(ticTacToe.move(1, 0, 2)).toBe(0);
  expect(ticTacToe.move(2, 1, 1)).toBe(1);
});
