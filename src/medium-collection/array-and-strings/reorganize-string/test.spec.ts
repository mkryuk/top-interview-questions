import { reorganizeString } from "./solution";

describe("Reorganize String", () => {
  it('reorganizeString should return "aba" for s = "aab"', () => {
    const s = "aab";
    const result = reorganizeString(s);
    expect(result).toEqual("aba");
  });

  it('reorganizeString should return "" for s = "aaab"', () => {
    const s = "aaab";
    const result = reorganizeString(s);
    expect(result).toEqual("");
  });
});
