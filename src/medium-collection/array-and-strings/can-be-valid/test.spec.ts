import { canBeValid } from "./solution";

describe("Check if a Parentheses String Can Be Valid", () => {
  it('canBeValid should return true for s = "))()))", locked = "010100"', () => {
    const s = "))()))";
    const locked = "010100";
    const result = canBeValid(s, locked);
    expect(result).toBeTrue();
  });

  it('canBeValid should return true for s = "()()", locked = "0000"', () => {
    const s = "()()";
    const locked = "0000";
    const result = canBeValid(s, locked);
    expect(result).toBeTrue();
  });

  it('canBeValid should return false for s = ")", locked = "0"', () => {
    const s = ")";
    const locked = "0";
    const result = canBeValid(s, locked);
    expect(result).toBeFalse();
  });
});
