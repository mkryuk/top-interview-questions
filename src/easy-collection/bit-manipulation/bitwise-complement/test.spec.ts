import { bitwiseComplement } from "./solution";

describe("Complement of Base 10 Integer", () => {
  it("bitwiseComplement should return 2 for n = 5", () => {
    const n = 5;
    const result = bitwiseComplement(n);
    expect(result).toEqual(2);
  });

  it("bitwiseComplement should return 0 for n = 7", () => {
    const n = 7;
    const result = bitwiseComplement(n);
    expect(result).toEqual(0);
  });

  it("bitwiseComplement should return 5 for n = 10", () => {
    const n = 10;
    const result = bitwiseComplement(n);
    expect(result).toEqual(5);
  });
});
