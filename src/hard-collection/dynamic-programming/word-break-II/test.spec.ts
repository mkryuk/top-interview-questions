import { wordBreak } from "./solution";

it('wordBreak should return ["cats and dog","cat sand dog"]', () => {
  const s = "catsanddog";
  const wordDict = ["cat", "cats", "and", "sand", "dog"];
  const expected = ["cats and dog", "cat sand dog"];
  const result = wordBreak(s, wordDict);
  expect(compareArrays(expected, result)).toBeTrue();
});

it('wordBreak should return ["pine apple pen apple","pineapple pen apple","pine applepen apple"]', () => {
  const s = "pineapplepenapple";
  const wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];
  const expected = [
    "pine apple pen apple",
    "pineapple pen apple",
    "pine applepen apple",
  ];
  const result = wordBreak(s, wordDict);
  expect(compareArrays(expected, result)).toBeTrue();
});

it("wordBreak should return []", () => {
  const s = "catsandog";
  const wordDict = ["cats", "dog", "sand", "and", "cat"];
  const expected: string[] = [];
  const result = wordBreak(s, wordDict);
  expect(compareArrays(expected, result)).toBeTrue();
});

function compareArrays(left: string[], right: string[]): boolean {
  if (left.length !== right.length) {
    return false;
  }
  return left.every((l) => right.includes(l));
}
