import { getNoZeroIntegers } from "./solution";

describe("1317. Convert Integer to the Sum of Two No-Zero Integers", () => {
  it("getNoZeroIntegers should return [1,1] for n = 2", () => {
    const n = 2;
    const result = getNoZeroIntegers(n);
    expect(result).toEqual([1, 1]);
  });

  it("getNoZeroIntegers should return [2,9] for n = 11", () => {
    const n = 11;
    const result = getNoZeroIntegers(n);
    expect(result).toEqual([2, 9]);
  });
});
