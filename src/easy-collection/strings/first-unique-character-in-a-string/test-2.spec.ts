import { firstUniqChar } from "./solution-2";

it('firstUniqChar should return 0 for s = "leetcode"', () => {
  const s = "leetcode";
  const result = firstUniqChar(s);
  expect(result).toBe(0);
});

it('firstUniqChar should return 2 for s = "loveleetcode"', () => {
  const s = "loveleetcode";
  const result = firstUniqChar(s);
  expect(result).toBe(2);
});

it('firstUniqChar should return -1 for s = "aabb"', () => {
  const s = "aabb";
  const result = firstUniqChar(s);
  expect(result).toBe(-1);
});
