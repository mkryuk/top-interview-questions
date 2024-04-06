import { makeGood } from "./solution";

describe("Make The String Great", () => {
  it('makeGood should return "leetcode" for s = "leEeetcode"', () => {
    const s = "leEeetcode";
    const result = makeGood(s);
    expect(result).toEqual("leetcode");
  });

  it('makeGood should return "" for s = "abBAcC"', () => {
    const s = "abBAcC";
    const result = makeGood(s);
    expect(result).toEqual("");
  });

  it('makeGood should return "s" for s = "s"', () => {
    const s = "s";
    const result = makeGood(s);
    expect(result).toEqual("s");
  });

  it('makeGood should return "" for s = "leEeTtEDdL"', () => {
    const s = "leEeTtEDdL";
    const result = makeGood(s);
    expect(result).toEqual("");
  });

  it('makeGood should return "o" for s = "qFxXfQo"', () => {
    const s = "qFxXfQo";
    const result = makeGood(s);
    expect(result).toEqual("o");
  });
});
