import { compress } from "./solution";

describe("String Compression", () => {
  it('compress should return 6 for chars = ["a","a","b","b","c","c","c"]', () => {
    const chars = ["a", "a", "b", "b", "c", "c", "c"];
    const result = compress(chars);
    expect(result).toEqual(6);
  });

  it('compress should return 1 for chars = ["a"]', () => {
    const chars = ["a"];
    const result = compress(chars);
    expect(result).toEqual(1);
  });

  it('compress should return 4 for chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () => {
    // prettier-ignore
    const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
    const result = compress(chars);
    expect(result).toEqual(4);
  });
});
