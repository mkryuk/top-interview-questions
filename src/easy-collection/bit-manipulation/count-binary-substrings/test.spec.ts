import { countBinarySubstrings } from "./solution";

describe("696. Count Binary Substrings", () => {
  it('countBinarySubstrings should return 6 for s = "00110011"', () => {
    const s = "00110011";
    const result = countBinarySubstrings(s);
    expect(result).toEqual(6);
  });

  it('countBinarySubstrings should return 4 for s = "10101"', () => {
    const s = "10101";
    const result = countBinarySubstrings(s);
    expect(result).toEqual(4);
  });
});
