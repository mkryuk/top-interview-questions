import { findWords } from "./solution-tle";

function compareArrays(left: string[], right: string[]): boolean {
  if (left.length !== right.length) {
    return false;
  }
  return left.every((l) => right.includes(l));
}

it("findWords should solve example 1", () => {
  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const words = ["oath", "pea", "eat", "rain"];
  const result = findWords(board, words);
  const expected = ["eat", "oath"];
  expect(compareArrays(result, expected)).toBeTrue();
});

it("findWords should solve example 2", () => {
  const board = [
    ["a", "b"],
    ["c", "d"],
  ];
  const words = ["abcb"];
  const result = findWords(board, words);
  const expected: string[] = [];
  expect(compareArrays(result, expected)).toBeTrue();
});

it("findWords should pass test 3", () => {
  const board = [["a", "a"]];
  const words = ["aaa"];
  const result = findWords(board, words);
  const expected: string[] = [];
  expect(compareArrays(result, expected)).toBeTrue();
});

it("findWords should pass test 4", () => {
  const board = [
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
  ];
  const words = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"];
  const result = findWords(board, words);
  const expected: string[] = [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa",
    "aaaaaaaa",
    "aaaaaaaaa",
    "aaaaaaaaaa",
  ];
  expect(compareArrays(result, expected)).toBeTrue();
});

it("findWords should pass test 59", () => {
  const board = [
    ["o", "a", "b", "n"],
    ["o", "t", "a", "e"],
    ["a", "h", "k", "r"],
    ["a", "f", "l", "v"],
  ];

  const words = ["oa", "oaa"];
  const result = findWords(board, words);
  const expected: string[] = ["oa", "oaa"];
  expect(compareArrays(result, expected)).toBeTrue();
});

it("findWords should pass test 61", () => {
  const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ];
  const words = ["oath", "pea", "eat", "rain", "oathi", "oathk", "oathf", "oate", "oathii", "oathfi", "oathfii"];
  const result = findWords(board, words);
  const expected: string[] = ["oath", "oathk", "oathf", "oathfi", "oathfii", "oathi", "oathii", "oate", "eat"];
  expect(compareArrays(result, expected)).toBeTrue();
});
