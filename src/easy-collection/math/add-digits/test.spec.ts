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

  it("addDigits should return 6 for num = 123", () => {
    const num = 123;
    const result = addDigits(num);
    expect(result).toEqual(6);
  });

  it("addDigits should return 1 for num = 1", () => {
    const num = 1;
    const result = addDigits(num);
    expect(result).toEqual(1);
  });
});
