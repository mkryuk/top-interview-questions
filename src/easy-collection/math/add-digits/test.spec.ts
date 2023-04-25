import { addDigits } from "./solution";

describe("Add Digits", () => {
  it("addDigits should return 2 for num = 38", () => {
    const num = 38;
    const result = addDigits(num);
    expect(result).toEqual(2);
  });

  it("addDigits should return 0 for num = 0", () => {
    const num = 0;
    const result = addDigits(num);
    expect(result).toEqual(0);
  });
});
