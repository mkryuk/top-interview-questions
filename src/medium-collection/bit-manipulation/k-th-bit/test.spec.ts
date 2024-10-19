import { findKthBit } from "./solution";

describe("Find Kth Bit in Nth Binary String", () => {
  it('findKthBit should return "0" for n = 3, k = 1', () => {
    const n = 3;
    const k = 1;
    const result = findKthBit(n, k);
    expect(result).toEqual("0");
  });

  it('findKthBit should return "1" for n = 4, k = 11', () => {
    const n = 4;
    const k = 11;
    const result = findKthBit(n, k);
    expect(result).toEqual("1");
  });

  it('findKthBit should return "1" for n = 3, k = 7', () => {
    const n = 3;
    const k = 7;
    const result = findKthBit(n, k);
    expect(result).toEqual("1");
  });
});
