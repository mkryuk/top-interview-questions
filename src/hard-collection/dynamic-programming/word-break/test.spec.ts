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

it('wordBreak should return true for s = "abcabcd", wordDict = ["abc","cab","ab","cd"]', () => {
  const s = "abcabcd";
  const wordDict = ["abc", "cab", "ab", "cd"];
  const result = wordBreak(s, wordDict);
  expect(result).toBeTrue();
});

it('wordBreak should return false for s = "abcabcd", wordDict = ["abc","cab","cd"]', () => {
  const s = "abcabcd";
  const wordDict = ["abc", "cab", "cd"];
  const result = wordBreak(s, wordDict);
  expect(result).toBeFalse();
});

it('wordBreak should return false for s = "aaaaaaa.....b", wordDict = ["a","aa","aaa" ...]', () => {
  const s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
  const wordDict = [
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
  const result = wordBreak(s, wordDict);
  expect(result).toBeFalse();
});
