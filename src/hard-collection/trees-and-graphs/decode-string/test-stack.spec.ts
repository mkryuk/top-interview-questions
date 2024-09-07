import { decodeString } from "./solution-stack";

it('decodeString should return "aaabcbc" for s = "3[a]2[bc]"', () => {
  const s = "3[a]2[bc]";
  const result = decodeString(s);
  expect(result).toEqual("aaabcbc");
});

it('decodeString should return "accaccacc" for s = "3[a2[c]]"', () => {
  const s = "3[a2[c]]";
  const result = decodeString(s);
  expect(result).toEqual("accaccacc");
});

it('decodeString should return "abcabccdcdcdef" for s = "2[abc]3[cd]ef"', () => {
  const s = "2[abc]3[cd]ef";
  const result = decodeString(s);
  expect(result).toEqual("abcabccdcdcdef");
});

it('decodeString should return correct result for s = "100[leetcode]"', () => {
  const s = "100[leetcode]";
  const result = decodeString(s);
  const expectedResult = "leetcode".repeat(100);
  expect(result).toEqual(expectedResult);
});

it('decodeString should return correct result for s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"', () => {
  const s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef";
  const result = decodeString(s);
  expect(result).toEqual("zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef");
});
