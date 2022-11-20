import { decodeString } from "./solution";

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
