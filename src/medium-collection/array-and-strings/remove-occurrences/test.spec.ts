import { removeOccurrences } from "./solution";

describe("Remove All Occurrences of a Substring", () => {
  it('removeOccurrences should return "dab" for s = "daabcbaabcbc", part = "abc"', () => {
    const s = "daabcbaabcbc";
    const part = "abc";
    const result = removeOccurrences(s, part);
    expect(result).toEqual("dab");
  });

  it('removeOccurrences should return "ab" for s = "axxxxyyyyb", part = "xy"', () => {
    const s = "axxxxyyyyb";
    const part = "xy";
    const result = removeOccurrences(s, part);
    expect(result).toEqual("ab");
  });
});
