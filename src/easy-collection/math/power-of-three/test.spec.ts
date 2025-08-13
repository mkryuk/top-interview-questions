import { isPowerOfThree } from "./solution";

describe("326. Power of Three", () => {
  it("isPowerOfThree should return true for n = 27", function () {
    const n = 27;
    const result = isPowerOfThree(n);
    expect(result).toEqual(true);
  });

  it("isPowerOfThree should return false for n = 0", function () {
    const n = 0;
    const result = isPowerOfThree(n);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree should return true for n = 1", function () {
    const n = 1;
    const result = isPowerOfThree(n);
    expect(result).toEqual(true);
  });

  it("isPowerOfThree should return true for n = 9", function () {
    const n = 9;
    const result = isPowerOfThree(n);
    expect(result).toEqual(true);
  });

  it("isPowerOfThree should return true for n = 45", function () {
    const n = 45;
    const result = isPowerOfThree(n);
    expect(result).toEqual(false);
  });
});
