import { closestTarget } from "./solution";

describe("2515. Shortest Distance to Target String in a Circular Array:", () => {
  it('closestTarget should return 1 for words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1', () => {
    const words = ["hello", "i", "am", "leetcode", "hello"];
    const target = "hello";
    const startIndex = 1;
    const result = closestTarget(words, target, startIndex);
    expect(result).toEqual(1);
  });

  it('closestTarget should return 1 for words = ["a","b","leetcode"], target = "leetcode", startIndex = 0', () => {
    const words = ["a", "b", "leetcode"];
    const target = "leetcode";
    const startIndex = 0;
    const result = closestTarget(words, target, startIndex);
    expect(result).toEqual(1);
  });

  it('closestTarget should return -1 for words = ["i","eat","leetcode"], target = "ate", startIndex = 0', () => {
    const words = ["i", "eat", "leetcode"];
    const target = "ate";
    const startIndex = 0;
    const result = closestTarget(words, target, startIndex);
    expect(result).toEqual(-1);
  });
});
