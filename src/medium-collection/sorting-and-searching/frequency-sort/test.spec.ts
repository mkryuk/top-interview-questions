import { frequencySort } from "./solution";

describe("Sort Characters By Frequency:", () => {
  it('frequencySort should return "eert" for s = "tree"', () => {
    const s = "tree";
    const result = frequencySort(s);
    expect(result).toEqual("eert");
  });

  it('frequencySort should return "aaaccc" for s = "cccaaa"', () => {
    const s = "cccaaa";
    const result = frequencySort(s);
    expect(result).toEqual("aaaccc");
  });

  it('frequencySort should return "bbAa" for s = "Aabb"', () => {
    const s = "Aabb";
    const result = frequencySort(s);
    expect(result).toEqual("bbAa");
  });
});
