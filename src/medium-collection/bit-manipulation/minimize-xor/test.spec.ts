import { minimizeXor } from "./solution";

describe("Minimize XOR", () => {
  it("minimizeXor should return 3 for num1 = 3, num2 = 5", () => {
    const num1 = 3;
    const num2 = 5;
    const result = minimizeXor(num1, num2);
    expect(result).toEqual(3);
  });

  it("minimizeXor should return 3 for num1 = 1, num2 = 12", () => {
    const num1 = 1;
    const num2 = 12;
    const result = minimizeXor(num1, num2);
    expect(result).toEqual(3);
  });
});
