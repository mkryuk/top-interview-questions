import { makeTheIntegerZero } from "./solution";

describe("2749. Minimum Operations to Make the Integer Zero", () => {
  it("makeTheIntegerZero should return 3 for num1 = 3, num2 = -2", () => {
    const num1 = 3;
    const num2 = -2;
    const result = makeTheIntegerZero(num1, num2);
    expect(result).toEqual(3);
  });

  it("makeTheIntegerZero should return -1 for num1 = 5, num2 = 7", () => {
    const num1 = 5;
    const num2 = 7;
    const result = makeTheIntegerZero(num1, num2);
    expect(result).toEqual(-1);
  });
});
