import { frequencySort } from "./solution";

describe("Sort Characters By Frequency:", () => {
  it('frequencySort should return "eert" for s = "tree"', () => {
    const s = "tree";
    const result = frequencySort(s);
    expect(result).toEqual("eetr");
  });

  it('frequencySort should return "aaaccc" for s = "cccaaa"', () => {
    const s = "cccaaa";
    const result = frequencySort(s);
    expect(result).toEqual("cccaaa");
  });

  it('frequencySort should return "bbAa" for s = "Aabb"', () => {
    const s = "Aabb";
    const result = frequencySort(s);
    expect(result).toEqual("bbAa");
  });

  it('frequencySort should return "eeeelloovtcd" for s = "loveleetcode"', () => {
    const s = "loveleetcode";
    const result = frequencySort(s);
    expect(result).toEqual("eeeelloovtcd");
  });
});
