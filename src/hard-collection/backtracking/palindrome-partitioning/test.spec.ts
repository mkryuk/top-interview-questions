import { partition } from "./solution";

it('partition should return [["a","a","b"],["aa","b"]] for s = "aab"', () => {
  const s = "aab";
  const expected = [
    ["a", "a", "b"],
    ["aa", "b"],
  ];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});

it('partition should return [["a"]] for s = "a"', () => {
  const s = "a";
  const expected = [["a"]];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});

it('partition should return correct result for s = "aabccb"', () => {
  const s = "aabccb";
  const expected = [
    ["a", "a", "b", "c", "c", "b"],
    ["a", "a", "b", "cc", "b"],
    ["a", "a", "bccb"],
    ["aa", "b", "c", "c", "b"],
    ["aa", "b", "cc", "b"],
    ["aa", "bccb"],
  ];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});

it('partition should return correct result for s = "aabccbaa"', () => {
  const s = "aabccbaa";
  const expected = [
    ["a", "a", "b", "c", "c", "b", "a", "a"],
    ["a", "a", "b", "c", "c", "b", "aa"],
    ["a", "a", "b", "cc", "b", "a", "a"],
    ["a", "a", "b", "cc", "b", "aa"],
    ["a", "a", "bccb", "a", "a"],
    ["a", "a", "bccb", "aa"],
    ["a", "abccba", "a"],
    ["aa", "b", "c", "c", "b", "a", "a"],
    ["aa", "b", "c", "c", "b", "aa"],
    ["aa", "b", "cc", "b", "a", "a"],
    ["aa", "b", "cc", "b", "aa"],
    ["aa", "bccb", "a", "a"],
    ["aa", "bccb", "aa"],
    ["aabccbaa"],
  ];
  const actual = partition(s);
  expect(actual).toEqual(expected);
});
