import { maximumGain } from "./solution";

describe("1717. Maximum Score From Removing Substrings", () => {
  it('maximumGain should return 19 for s = "cdbcbbaaabab", x = 4, y = 5', () => {
    const s = "cdbcbbaaabab";
    const x = 4;
    const y = 5;
    const result = maximumGain(s, x, y);
    expect(result).toEqual(19);
  });

  it('maximumGain should return 20 for s = "aabbaaxybbaabb", x = 5, y = 4', () => {
    const s = "aabbaaxybbaabb";
    const x = 5;
    const y = 4;
    const result = maximumGain(s, x, y);
    expect(result).toEqual(20);
  });
});
