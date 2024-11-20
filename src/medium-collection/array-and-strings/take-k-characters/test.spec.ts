import { takeCharacters } from "./solution";

describe("Take K of Each Character From Left and Right", () => {
  it('takeCharacters should return 8 for s = "aabaaaacaabc", k = 2', () => {
    const s = "aabaaaacaabc";
    const k = 2;
    const result = takeCharacters(s, k);
    expect(result).toEqual(8);
  });

  it('takeCharacters should return -1 for s = "a", k = 1', () => {
    const s = "a";
    const k = 1;
    const result = takeCharacters(s, k);
    expect(result).toEqual(8);
  });
});
