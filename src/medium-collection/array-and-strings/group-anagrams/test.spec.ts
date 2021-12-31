import { groupAnagrams } from "./solution";

it('groupAnagrams should return [["bat"],["nat","tan"],["ate","eat","tea"]] for strs = ["eat","tea","tan","ate","nat","bat"]', function () {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const result = groupAnagrams(strs);
  expect(result).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
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
