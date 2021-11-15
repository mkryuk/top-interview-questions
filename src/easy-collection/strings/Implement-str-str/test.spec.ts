import { strStr } from "./solution";

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

it('strStr should return 0 for haystack = "", needle = ""', function () {
  let haystack = "",
    needle = "";
  let result = strStr(haystack, needle);
  expect(result).toEqual(0);
});
