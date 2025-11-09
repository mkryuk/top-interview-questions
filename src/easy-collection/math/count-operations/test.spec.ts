import { countOperations } from "./solution";

describe("2169. Count Operations to Obtain Zero", () => {
  it("countOperations should return 3 for num1 = 2, num2 = 3", () => {
    const num1 = 2;
    const num2 = 3;
    const result = countOperations(num1, num2);
    expect(result).toEqual(3);
  });

  it("countOperations should return 1 for num1 = 10, num2 = 10", () => {
    const num1 = 10;
    const num2 = 10;
    const result = countOperations(num1, num2);
    expect(result).toEqual(1);
  });
});
