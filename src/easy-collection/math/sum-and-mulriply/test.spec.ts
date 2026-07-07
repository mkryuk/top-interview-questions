import { sumAndMultiply } from "./solution";

describe("3754. Concatenate Non-Zero Digits and Multiply by Sum I:", () => {
  it("sumAndMultiply should return 12340 for n = 10203004", () => {
    const n = 10203004;
    const result = sumAndMultiply(n);
    expect(result).toEqual(12340);
  });

  it("sumAndMultiply should return 1 for n = 1000", () => {
    const n = 1000;
    const result = sumAndMultiply(n);
    expect(result).toEqual(1);
  });
});
