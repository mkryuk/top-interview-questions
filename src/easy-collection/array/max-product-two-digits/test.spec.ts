import { maxProduct } from "./solution";

describe("3536. Maximum Product of Two Digits:", () => {
  it("returns 3 for n = 31", () => {
    const result = maxProduct(31);
    expect(result).toEqual(3);
  });

  it("returns 4 for n = 22", () => {
    const result = maxProduct(22);
    expect(result).toEqual(4);
  });

  it("returns 8 for n = 124", () => {
    const result = maxProduct(124);
    expect(result).toEqual(8);
  });
});
