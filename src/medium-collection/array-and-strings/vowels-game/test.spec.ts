import { doesAliceWin } from "./solution";

describe("3227. Vowels Game in a String", () => {
  it('doesAliceWin should return true for s = "leetcoder"', () => {
    const s = "leetcoder";
    const result = doesAliceWin(s);
    expect(result).toBeTrue();
  });

  it('doesAliceWin should return false for s = "bbcd"', () => {
    const s = "bbcd";
    const result = doesAliceWin(s);
    expect(result).toBeFalse();
  });
});
