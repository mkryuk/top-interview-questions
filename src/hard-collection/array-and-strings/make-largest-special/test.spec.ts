import { makeLargestSpecial } from "./solution";

describe("761. Special Binary String:", () => {
  it('makeLargestSpecial should return "11100100" for s = "11011000"', () => {
    const s = "11011000";
    const result = makeLargestSpecial(s);
    expect(result).toEqual("11100100");
  });

  it('makeLargestSpecial should return "10" for s = "10"', () => {
    const s = "10";
    const result = makeLargestSpecial(s);
    expect(result).toEqual("10");
  });
});
