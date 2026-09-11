import { totalNumbers } from "./solution";

describe("3483. Unique 3-Digit Even Numbers:", () => {
  it("returns 12 for digits = [1,2,3,4]", () => {
    const digits = [1, 2, 3, 4];
    const result = totalNumbers(digits);
    expect(result).toEqual(12);
  });

  it("returns 2 for digits = [0,2,2]", () => {
    const digits = [0, 2, 2];
    const result = totalNumbers(digits);
    expect(result).toEqual(2);
  });

  it("returns 1 for digits = [6,6,6]", () => {
    const digits = [6, 6, 6];
    const result = totalNumbers(digits);
    expect(result).toEqual(1);
  });

  it("returns 0 for digits = [1,3,5]", () => {
    const digits = [1, 3, 5];
    const result = totalNumbers(digits);
    expect(result).toEqual(0);
  });
});
