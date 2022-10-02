import { wordBreak } from "./solution";

it('wordBreak should return true for s = "leetcode", wordDict = ["leet","code"]', () => {
  const s = "leetcode";
  const wordDict = ["leet", "code"];
  const result = wordBreak(s, wordDict);
  expect(result).toBeTrue();
});

it('wordBreak should return true for s = "applepenapple", wordDict = ["apple","pen"]', () => {
  const s = "applepenapple";
  const wordDict = ["apple", "pen"];
  const result = wordBreak(s, wordDict);
  expect(result).toBeTrue();
});

it('wordBreak should return false for s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', () => {
  const s = "catsandog";
  const wordDict = ["cats", "dog", "sand", "and", "cat"];
  const result = wordBreak(s, wordDict);
  expect(result).toBeFalse();
});
