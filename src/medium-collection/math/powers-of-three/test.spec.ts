import { checkPowersOfThree } from "./solution";

describe("Check if Number is a Sum of Powers of Three", () => {
  it("checkPowersOfThree should return true for n = 12", () => {
    const n = 12;
    const result = checkPowersOfThree(n);
    expect(result).toBeTrue();
  });

  it("checkPowersOfThree should return true for n = 91", () => {
    const n = 91;
    const result = checkPowersOfThree(n);
    expect(result).toBeTrue();
  });

  it("checkPowersOfThree should return false for n = 21", () => {
    const n = 21;
    const result = checkPowersOfThree(n);
    expect(result).toBeFalse();
  });

  it("checkPowersOfThree should return true for n = 1", () => {
    const n = 1;
    const result = checkPowersOfThree(n);
    expect(result).toBeTrue();
  });
});
