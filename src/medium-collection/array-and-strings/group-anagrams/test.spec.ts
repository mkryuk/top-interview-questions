import { groupAnagrams } from "./solution";

it('groupAnagrams should return [["bat"],["nat","tan"],["ate","eat","tea"]] for strs = ["eat","tea","tan","ate","nat","bat"]', function () {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const result = groupAnagrams(strs);
  expect(result).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});

it('groupAnagrams should return [["squad","quads"],["fats","fast"],["bat"],["tea","ate"]] for strs = ["quads","fast","fats","squad","ate","tea","bat"]', function () {
  const strs = ["quads", "fast", "fats", "squad", "ate", "tea", "bat"];
  const result = groupAnagrams(strs);
  expect(result).toEqual([
    ["quads", "squad"],
    ["fast", "fats"],
    ["ate", "tea"],
    ["bat"],
  ]);
});

it('groupAnagrams should return [[""]] for strs = [""]', function () {
  const strs = [""];
  const result = groupAnagrams(strs);
  expect(result).toEqual([[""]]);
});

it('groupAnagrams should return [["a"]] for strs = ["a"]', function () {
  const strs = ["a"];
  const result = groupAnagrams(strs);
  expect(result).toEqual([["a"]]);
});
