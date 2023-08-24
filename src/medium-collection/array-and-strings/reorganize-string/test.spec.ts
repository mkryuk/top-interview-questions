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

  it('reorganizeString should return "vlvov" for s = "vvvlo"', () => {
    const s = "vvvlo";
    const result = reorganizeString(s);
    expect(result).toEqual("vlvov");
  });

  it('reorganizeString should return "fpfsf" for s = "sfffp"', () => {
    const s = "sfffp";
    const result = reorganizeString(s);
    expect(result).toEqual("fsfpf");
  });

  it('reorganizeString should return "abcabcabcabcdabcdea" for s = "aaaaaabbbbbcccccdde"', () => {
    const s = "aaaaaabbbbbcccccdde";
    const result = reorganizeString(s);
    expect(result).toEqual("abcabcabcabcdabcdea");
  });
});
