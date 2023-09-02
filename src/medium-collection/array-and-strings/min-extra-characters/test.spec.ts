import { minExtraChar } from "./solution";

describe("Extra Characters in a String:", () => {
  it('minExtraChar should return 1 for s = "leetscode", dictionary = ["leet","code","leetcode"]', () => {
    const s = "leetscode";
    const dictionary = ["leet", "code", "leetcode"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(1);
  });

  it('minExtraChar should return 3 for s = "leetscode", dictionary = ["leet","code","leetcode"]', () => {
    const s = "sayhelloworld";
    const dictionary = ["hello", "world"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(3);
  });
});
