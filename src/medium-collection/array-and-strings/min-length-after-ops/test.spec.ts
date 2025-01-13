import { minimumLength } from "./solution";

describe("Minimum Length of String After Operations", () => {
  it('minimumLength should return 5 for s = "abaacbcbb"', () => {
    const s = "abaacbcbb";
    const result = minimumLength(s);
    expect(result).toEqual(5);
  });

  it('minimumLength should return 2 for s = "aa"', () => {
    const s = "aa";
    const result = minimumLength(s);
    expect(result).toEqual(2);
  });
});
