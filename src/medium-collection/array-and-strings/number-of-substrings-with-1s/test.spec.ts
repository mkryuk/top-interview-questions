import { numSub } from "./solution";

describe("1513. Number of Substrings With Only 1s", () => {
  it('numSub should return 9 for s = "0110111"', () => {
    const s = "0110111";
    const result = numSub(s);
    expect(result).toEqual(9);
  });

  it('numSub should return 2 for s = "101"', () => {
    const s = "101";
    const result = numSub(s);
    expect(result).toEqual(2);
  });

  it('numSub should return 21 for s = "111111"', () => {
    const s = "111111";
    const result = numSub(s);
    expect(result).toEqual(21);
  });
});
