import { processStr } from "./solution";

describe("3612. Process String with Special Operations I:", () => {
  it('processStr should return "ba" for s = "a#b%*"', () => {
    const s = "a#b%*";
    const result = processStr(s);
    expect(result).toEqual("ba");
  });

  it('processStr should return "" for s = "z*#"', () => {
    const s = "z*#";
    const result = processStr(s);
    expect(result).toEqual("");
  });
});
