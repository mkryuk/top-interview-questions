import { sortVowels } from "./solution";

describe("2785. Sort Vowels in a String:", () => {
  it('sortVowels should return "lEOtcede" for s = "lEetcOde"', () => {
    const s = "lEetcOde";
    const result = sortVowels(s);
    expect(result).toEqual("lEOtcede");
  });

  it('sortVowels should return "lYmpH" for s = "lYmpH"', () => {
    const s = "lYmpH";
    const result = sortVowels(s);
    expect(result).toEqual("lYmpH");
  });
});
