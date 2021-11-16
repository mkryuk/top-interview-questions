import { strStr } from "./solution-kmp";

it('strStr should return 2 for haystack = "hello", needle = "ll"', function () {
  let haystack = "hello",
    needle = "ll";
  let result = strStr(haystack, needle);
  expect(result).toEqual(2);
});

it('strStr should return -1 for haystack = "aaaaa", needle = "bba"', function () {
  let haystack = "aaaaa",
    needle = "bba";
  let result = strStr(haystack, needle);
  expect(result).toEqual(-1);
});

it('strStr should return 3 for haystack = "abbaaa", needle = "aa"', function () {
  let haystack = "abbaaa",
    needle = "aa";
  let result = strStr(haystack, needle);
  expect(result).toEqual(3);
});

it('strStr should return 3 for haystack = "abaabbaaa", needle = "aa"', function () {
  let haystack = "abbaaa",
    needle = "aa";
  let result = strStr(haystack, needle);
  expect(result).toEqual(3);
});

it('strStr should return 4 for haystack = "mississippi",needle = "issip"', function () {
  let haystack = "mississippi",
    needle = "issip";
  let result = strStr(haystack, needle);
  expect(result).toEqual(4);
});

it('strStr should return 6 for haystack = "abxabcabcaby", needle = "abcaby"', function () {
  let haystack = "abxabcabcaby",
    needle = "abcaby";
  let result = strStr(haystack, needle);
  expect(result).toEqual(6);
});

it('strStr should return 6 for haystack = "ababcaababcaabc", needle = "ababcaabc"', function () {
  let haystack = "ababcaababcaabc",
    needle = "ababcaabc";
  let result = strStr(haystack, needle);
  expect(result).toEqual(6);
});

it('strStr should return 0 for haystack = "", needle = ""', function () {
  let haystack = "",
    needle = "";
  let result = strStr(haystack, needle);
  expect(result).toEqual(0);
});
