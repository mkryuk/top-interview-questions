import { kthSmallestPrimeFraction } from "./solution";

describe("K-th Smallest Prime Fraction", () => {
  it("kthSmallestPrimeFraction should return [2,5] for arr = [1,2,3,5], k = 3", () => {
    const arr = [1, 2, 3, 5];
    const k = 3;
    const result = kthSmallestPrimeFraction(arr, k);
    expect(result).toEqual([2, 5]);
  });

  it("kthSmallestPrimeFraction should return [1,7] for arr = [1,7], k = 1", () => {
    const arr = [1, 7];
    const k = 1;
    const result = kthSmallestPrimeFraction(arr, k);
    expect(result).toEqual([1, 7]);
  });
});
