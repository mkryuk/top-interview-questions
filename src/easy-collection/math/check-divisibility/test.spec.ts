import { checkDivisibility } from "./solution";

describe("3622. Check Divisibility by Digit Sum and Product:", () => {
  it("checkDivisibility should return true for n = 99", () => {
    const n = 99;
    const result = checkDivisibility(n);
    expect(result).toEqual(true);
  });

  it("checkDivisibility should return false for n = 23", () => {
    const n = 23;
    const result = checkDivisibility(n);
    expect(result).toEqual(false);
  });
});
