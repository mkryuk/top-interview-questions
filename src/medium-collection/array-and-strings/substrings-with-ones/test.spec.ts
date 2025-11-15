import { numberOfSubstrings } from "./solution";

describe("3234. Count the Number of Substrings With Dominant Ones", () => {
  it('numberOfSubstrings should return 5 for s = "00011"', () => {
    const s = "00011";
    const result = numberOfSubstrings(s);
    expect(result).toEqual(5);
  });

  it('numberOfSubstrings should return 16 for s = "101101"', () => {
    const s = "101101";
    const result = numberOfSubstrings(s);
    expect(result).toEqual(16);
  });
});
