import { exist } from "./solution";

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', () => {
  const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word = "ABCCED";
  const result = exist(board, word);
  expect(result).toBeTrue();
});

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', () => {
  const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word = "SEE";
  const result = exist(board, word);
  expect(result).toBeTrue();
});

it('exist should return true for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCFDEES"', () => {
  const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word = "ABCCFDEES";
  const result = exist(board, word);
  expect(result).toBeTrue();
});

it('exist should return false for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"', () => {
  const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word = "ABCCED";
  const result = exist(board, word);
  expect(result).toBeFalse();
});

it('exist should return false for board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCESCX"', () => {
  const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word = "ABCESCX";
  const result = exist(board, word);
  expect(result).toBeFalse();
});
