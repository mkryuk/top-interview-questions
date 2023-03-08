import { compress } from "./solution";

describe("String Compression", () => {
  it('compress should return 6 for chars = ["a","a","b","b","c","c","c"]', () => {
    const chars = ["a", "a", "b", "b", "c", "c", "c"];
    const result = compress(chars);
    expect(result).toEqual(6);
    expect(chars.slice(0, result)).toEqual(["a", "2", "b", "2", "c", "3"]);
  });

  it('compress should return 1 for chars = ["a"]', () => {
    const chars = ["a"];
    const result = compress(chars);
    expect(result).toEqual(1);
    expect(chars.slice(0, result)).toEqual(["a"]);
  });

  it('compress should return 4 for chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]', () => {
    // prettier-ignore
    const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
    const result = compress(chars);
    expect(result).toEqual(4);
    expect(chars.slice(0, result)).toEqual(["a", "b", "1", "2"]);
  });

  it('compress should return 6 for chars = ["a","a","a","b","b","a","a"]', () => {
    const chars = ["a", "a", "a", "b", "b", "a", "a"];
    const result = compress(chars);
    expect(result).toEqual(6);
    expect(chars.slice(0, result)).toEqual(["a", "3", "b", "2", "a", "2"]);
  });

  it('compress should return 3 for chars = ["a","b","c"]', () => {
    const chars = ["a", "b", "c"];
    const result = compress(chars);
    expect(result).toEqual(3);
    expect(chars.slice(0, result)).toEqual(["a", "b", "c"]);
  });
});
