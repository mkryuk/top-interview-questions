import { rotateString } from "./solution";

describe("Rotate String", () => {
  it('rotateString should return true for s = "abcde", goal = "cdeab"', () => {
    const s = "abcde";
    const goal = "cdeab";
    const result = rotateString(s, goal);
    expect(result).toBeTrue();
  });

  it('rotateString should return false for s = "abcde", goal = "abced"', () => {
    const s = "abcde";
    const goal = "abced";
    const result = rotateString(s, goal);
    expect(result).toBeFalse();
  });
});
