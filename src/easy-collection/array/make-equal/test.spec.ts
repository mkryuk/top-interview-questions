import { makeEqual } from "./solution";

describe("Redistribute Characters to Make All Strings Equal:", () => {
  it('makeEqual should return true for words = ["abc","aabc","bc"]', () => {
    const words = ["abc", "aabc", "bc"];
    const result = makeEqual(words);
    expect(result).toBeTrue();
  });

  it('makeEqual should return false for words = ["ab","a"]', () => {
    const words = ["ab", "a"];
    const result = makeEqual(words);
    expect(result).toBeFalse();
  });
});
