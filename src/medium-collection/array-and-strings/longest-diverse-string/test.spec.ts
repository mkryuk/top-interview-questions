import { longestDiverseString } from "./solution";

describe("Longest Happy String", () => {
  it('longestDiverseString should return "ccaccbcc" for a = 1, b = 1, c = 7', () => {
    const a = 1;
    const b = 1;
    const c = 7;
    const result = longestDiverseString(a, b, c);
    expect(result).toEqual("ccaccbcc");
  });

  it('longestDiverseString should return "aabaa" for a = 7, b = 1, c = 0', () => {
    const a = 7;
    const b = 1;
    const c = 0;
    const result = longestDiverseString(a, b, c);
    expect(result).toEqual("aabaa");
  });

  it('longestDiverseString should return "ccbccbcbcbcbcbcbcbc" for a = 0, b = 8, c = 11', () => {
    const a = 0;
    const b = 8;
    const c = 11;
    const result = longestDiverseString(a, b, c);
    expect(result).toEqual("ccbccbcbcbcbcbcbcbc");
  });
});
