import { processStr } from "./solution";

describe("3614. Process String with Special Operations II:", () => {
  it('processStr should return "a" for s = "a#b%*", k = 1', () => {
    const s = "a#b%*";
    const k = 1;
    const result = processStr(s, k);
    expect(result).toEqual("a");
  });

  it('processStr should return "d" for s = "cd%#*#", k = 3', () => {
    const s = "cd%#*#";
    const k = 3;
    const result = processStr(s, k);
    expect(result).toEqual("d");
  });

  it('processStr should return "." for s = "z*#", k = 0', () => {
    const s = "z*#";
    const k = 0;
    const result = processStr(s, k);
    expect(result).toEqual(".");
  });
});
