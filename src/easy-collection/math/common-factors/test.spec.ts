import { commonFactors } from "./solution";

describe("Number of Common Factors", () => {
  it("commonFactors should return 4 for a = 12, b = 6", () => {
    const a = 12;
    const b = 6;
    const result = commonFactors(a, b);
    expect(result).toEqual(4);
  });

  it("commonFactors should return 2 for a = 25, b = 30", () => {
    const a = 25;
    const b = 30;
    const result = commonFactors(a, b);
    expect(result).toEqual(2);
  });
});
