import { rangeBitwiseAnd } from "./solution";

describe("Bitwise AND of Numbers Range:", () => {
  it("rangeBitwiseAnd should return 4 for left = 5, right = 7", () => {
    const left = 5;
    const right = 7;
    const result = rangeBitwiseAnd(left, right);
    expect(result).toEqual(4);
  });

  it("rangeBitwiseAnd should return 0 for left = 0, right = 0", () => {
    const left = 0;
    const right = 0;
    const result = rangeBitwiseAnd(left, right);
    expect(result).toEqual(0);
  });

  it("rangeBitwiseAnd should return 0 for left = 1, right = 2147483647", () => {
    const left = 1;
    const right = 2147483647;
    const result = rangeBitwiseAnd(left, right);
    expect(result).toEqual(0);
  });

  it("rangeBitwiseAnd should return 0 for left = 1, right = 2", () => {
    const left = 1;
    const right = 2;
    const result = rangeBitwiseAnd(left, right);
    expect(result).toEqual(0);
  });
});
