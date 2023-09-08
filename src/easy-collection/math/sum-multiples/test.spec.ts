import { sumOfMultiples } from "./solution";

describe("Sum Multiples:", () => {
  it("sumOfMultiples should return 21 for n = 7", () => {
    const n = 7;
    const result = sumOfMultiples(n);
    expect(result).toEqual(21);
  });

  it("sumOfMultiples should return 40 for n = 10", () => {
    const n = 10;
    const result = sumOfMultiples(n);
    expect(result).toEqual(40);
  });

  it("sumOfMultiples should return 30 for n = 9", () => {
    const n = 9;
    const result = sumOfMultiples(n);
    expect(result).toEqual(30);
  });
});
