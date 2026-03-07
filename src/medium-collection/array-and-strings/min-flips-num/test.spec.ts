import { minFlips } from "./solution";

describe("Minimum Number of Flips to Make the Binary String Alternating", () => {
  it('minFlips should return 2 for s = "111000"', () => {
    const s = "111000";
    const result = minFlips(s);
    expect(result).toEqual(2);
  });

  it('minFlips should return 0 for s = "010"', () => {
    const s = "010";
    const result = minFlips(s);
    expect(result).toEqual(0);
  });

  it('minFlips should return 1 for s = "1110"', () => {
    const s = "1110";
    const result = minFlips(s);
    expect(result).toEqual(1);
  });
});
