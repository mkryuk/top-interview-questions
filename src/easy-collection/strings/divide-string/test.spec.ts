import { divideString } from "./solution";

describe("2138. Divide a String Into Groups of Size k", () => {
  it('divideString should return ["abc","def","ghi"] for s = "abcdefghi", k = 3, fill = "x"', () => {
    const s = "abcdefghi";
    const k = 3;
    const fill = "x";
    const result = divideString(s, k, fill);
    expect(result).toEqual(["abc", "def", "ghi"]);
  });

  it('divideString should return ["abc","def","ghi","jxx"] for s = "abcdefghij", k = 3, fill = "x"', () => {
    const s = "abcdefghij";
    const k = 3;
    const fill = "x";
    const result = divideString(s, k, fill);
    expect(result).toEqual(["abc", "def", "ghi", "jxx"]);
  });
});
