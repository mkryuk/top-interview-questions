import { findWords } from "./solution";

it("findWords should solve example 1", () => {
  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const words = ["oath", "pea", "eat", "rain"];
  expect(findWords(board, words)).toEqual(["eat", "oath"]);
});

it("findWords should solve example 2", () => {
  const board = [
    ["a", "b"],
    ["c", "d"],
  ];
  const words = ["abcb"];
  expect(findWords(board, words)).toEqual(["abcd", "abdc", "acdb", "bdac"]);
});
