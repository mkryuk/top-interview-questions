import { findKthNumber } from "./solution";

describe("K-th Smallest in Lexicographical Order", () => {
  it("findKthNumber should return 10 for n = 13, k = 2", () => {
    const n = 13;
    const k = 2;
    const result = findKthNumber(n, k);
    expect(result).toEqual(10);
  });

  it("findKthNumber should return 1 for n = 1, k = 1", () => {
    const n = 1;
    const k = 1;
    const result = findKthNumber(n, k);
    expect(result).toEqual(1);
  });

  it("findKthNumber should return 2 for n = 10, k = 3", () => {
    const n = 10;
    const k = 3;
    const result = findKthNumber(n, k);
    expect(result).toEqual(2);
  });

  it("findKthNumber should return 416126219 for n = 681692778, k = 351251360", () => {
    const n = 681692778;
    const k = 351251360;
    const result = findKthNumber(n, k);
    expect(result).toEqual(416126219);
  });
});
