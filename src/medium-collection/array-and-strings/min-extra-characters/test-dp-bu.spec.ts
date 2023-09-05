import { minExtraChar } from "./solution-dp-bu";

describe("Extra Characters in a String:", () => {
  it('minExtraChar should return 1 for s = "leetscode", dictionary = ["leet","code","leetcode"]', () => {
    const s = "leetscode";
    const dictionary = ["leet", "code", "leetcode"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(1);
  });

  it('minExtraChar should return 3 for s = "sayhelloworld", dictionary = ["hello", "world"]', () => {
    const s = "sayhelloworld";
    const dictionary = ["hello", "world"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(3);
  });

  it('minExtraChar should return 0 for s = "sayhelloworld", dictionary = ["hello", "world"]', () => {
    const s = "sayhelloworld";
    const dictionary = ["hello", "world", "say"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(0);
  });

  it('minExtraChar should return 2 for s = "sayhelloworld", dictionary = ["hello", "world", "a"]', () => {
    const s = "sayhelloworld";
    const dictionary = ["hello", "world", "a"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(2);
  });

  it('minExtraChar should return 3 for s = "sayhelloworldagain", dictionary = ["hello","world", "a","in"]', () => {
    const s = "sayhelloworldagain";
    const dictionary = ["hello", "world", "a", "in"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(3);
  });

  it('minExtraChar should return 0 for s = "sayhelloworld", dictionary = ["ayhelloworl","say","hello","world"]', () => {
    const s = "sayhelloworld";
    const dictionary = ["ayhelloworl", "say", "hello", "world"];
    const result = minExtraChar(s, dictionary);
    expect(result).toEqual(0);
  });
});
