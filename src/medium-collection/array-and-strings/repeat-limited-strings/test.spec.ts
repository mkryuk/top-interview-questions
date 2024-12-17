import { repeatLimitedString } from "./solution";

describe("Construct String With Repeat Limit", () => {
  it('repeatLimitedString should return "zzcccac" for s = "cczazcc", repeatLimit = 3', () => {
    const s = "cczazcc";
    const repeatLimit = 3;
    const result = repeatLimitedString(s, repeatLimit);
    expect(result).toEqual("zzcccac");
  });

  it('repeatLimitedString should return "bbabaa" for s = "aababab", repeatLimit = 2', () => {
    const s = "aababab";
    const repeatLimit = 2;
    const result = repeatLimitedString(s, repeatLimit);
    expect(result).toEqual("bbabaa");
  });
});
