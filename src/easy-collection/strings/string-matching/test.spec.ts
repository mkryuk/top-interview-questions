import { stringMatching } from "./solution";

describe("String Matching in an Array", () => {
  it('stringMatching should return ["as","hero"] for words = ["mass","as","hero","superhero"]', () => {
    const words = ["mass", "as", "hero", "superhero"];
    const result = stringMatching(words);
    expect(result).toEqual(["as", "hero"]);
  });

  it('stringMatching should return ["et","code"] for words = ["leetcode","et","code"]', () => {
    const words = ["leetcode", "et", "code"];
    const result = stringMatching(words);
    expect(result).toEqual(["et", "code"]);
  });

  it('stringMatching should return [] for words = ["blue","green","bu"]', () => {
    const words = ["blue", "green", "bu"];
    const result = stringMatching(words);
    expect(result).toEqual([]);
  });
});
