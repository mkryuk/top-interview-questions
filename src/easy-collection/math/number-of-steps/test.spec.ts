import { numberOfSteps } from "./solution";

describe("Number of Steps to Reduce a Number to Zero", () => {
  it("numberOfSteps should return 6 for num = 14", () => {
    const num = 14;
    const result = numberOfSteps(num);
    expect(result).toEqual(6);
  });

  it("numberOfSteps should return 4 for num = 8", () => {
    const num = 8;
    const result = numberOfSteps(num);
    expect(result).toEqual(4);
  });

  it("numberOfSteps should return 12 for num = 123", () => {
    const num = 123;
    const result = numberOfSteps(num);
    expect(result).toEqual(12);
  });
});
