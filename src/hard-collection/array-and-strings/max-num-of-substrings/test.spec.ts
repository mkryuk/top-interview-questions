import { maxNumOfSubstrings } from "./solution";

describe("1520. Maximum Number of Non-Overlapping Substrings:", () => {
  it('maxNumOfSubstrings should return ["e","f","ccc"] for s = "adefaddaccc"', () => {
    const s = "adefaddaccc";
    const result = maxNumOfSubstrings(s);
    expect(result).toEqual(jasmine.arrayWithExactContents(["e", "f", "ccc"]));
  });

  it('maxNumOfSubstrings should return ["d","bb","cc"] for s = "abbaccd"', () => {
    const s = "abbaccd";
    const result = maxNumOfSubstrings(s);
    expect(result).toEqual(jasmine.arrayWithExactContents(["d", "bb", "cc"]));
  });
});
