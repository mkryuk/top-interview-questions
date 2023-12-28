import { getLengthOfOptimalCompression } from "./solution";

describe("String Compression II:", () => {
  it('getLengthOfOptimalCompression should return 4 for s = "aaabcccd", k = 2', () => {
    const s = "aaabcccd";
    const k = 2;
    const result = getLengthOfOptimalCompression(s, k);
    expect(result).toEqual(4);
  });

  it('getLengthOfOptimalCompression should return 2 for s = "aabbaa", k = 2', () => {
    const s = "aabbaa";
    const k = 2;
    const result = getLengthOfOptimalCompression(s, k);
    expect(result).toEqual(2);
  });

  it('getLengthOfOptimalCompression should return 3 for s = "aaaaaaaaaaa", k = 0', () => {
    const s = "aaaaaaaaaaa";
    const k = 0;
    const result = getLengthOfOptimalCompression(s, k);
    expect(result).toEqual(3);
  });
});
