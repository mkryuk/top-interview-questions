import { longestCommonPrefix } from "./solution";

it('longestCommonPrefix should return "fl" for strs = ["flower","flow","flight"]', function () {
  const strs = ["flower", "flow", "flight"];
  const result = longestCommonPrefix(strs);
  expect(result).toBe("fl");
});

it('longestCommonPrefix should return "" for strs = ["dog","racecar","car"]', function () {
  const strs = ["dog", "racecar", "car"];
  const result = longestCommonPrefix(strs);
  expect(result).toBe("");
});

it('longestCommonPrefix should return "aab" for strs = ["aabc","aabaa","aabac"]', function () {
  const strs = ["aabc", "aabaa", "aabac"];
  const result = longestCommonPrefix(strs);
  expect(result).toBe("aab");
});

it('longestCommonPrefix should return "aabaac" for strs = ["aabaac","aabaac","aabaac"]', function () {
  const strs = ["aabaac", "aabaac", "aabaac"];
  const result = longestCommonPrefix(strs);
  expect(result).toBe("aabaac");
});

it('longestCommonPrefix should return "aabaac" for strs = ["aabaac"]', function () {
  const strs = ["aabaac"];
  const result = longestCommonPrefix(strs);
  expect(result).toBe("aabaac");
});
