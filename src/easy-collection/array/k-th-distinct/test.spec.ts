import { kthDistinct } from "./solution";

describe("Kth Distinct String in an Array", () => {
  it('kthDistinct should return "a" for arr = ["d","b","c","b","c","a"], k = 2', () => {
    const arr = ["d", "b", "c", "b", "c", "a"];
    const k = 2;
    const result = kthDistinct(arr, k);
    expect(result).toEqual("a");
  });

  it('kthDistinct should return "aaa" for arr = ["aaa","aa","a"], k = 1', () => {
    const arr = ["aaa", "aa", "a"];
    const k = 1;
    const result = kthDistinct(arr, k);
    expect(result).toEqual("aaa");
  });

  it('kthDistinct should return "" for arr = ["a","b","a"], k = 3', () => {
    const arr = ["a", "b", "a"];
    const k = 3;
    const result = kthDistinct(arr, k);
    expect(result).toEqual("");
  });
});
