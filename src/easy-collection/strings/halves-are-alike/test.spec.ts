import { halvesAreAlike } from "./solution";

describe("Determine if String Halves Are Alike:", () => {
  it('halvesAreAlike should return true for s = "book"', () => {
    const s = "book";
    const result = halvesAreAlike(s);
    expect(result).toBeTrue();
  });

  it('halvesAreAlike should return false for s = "textbook"', () => {
    const s = "textbook";
    const result = halvesAreAlike(s);
    expect(result).toBeFalse();
  });
});
