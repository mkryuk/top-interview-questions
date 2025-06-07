import { clearStars } from "./solution";

describe("3170. Lexicographically Minimum String After Removing Stars", () => {
  it('clearStars should return "aab" for s = "aaba*"', () => {
    const s = "aaba*";
    const result = clearStars(s);
    expect(result).toEqual("aab");
  });

  it('clearStars should return "abc" for s = "abc"', () => {
    const s = "abc";
    const result = clearStars(s);
    expect(result).toEqual("abc");
  });
});
