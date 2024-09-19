import { diffWaysToCompute } from "./solution";

describe("Different Ways to Add Parentheses", () => {
  it('diffWaysToCompute should return [0,2] for expression = "2-1-1"', () => {
    const expression = "2-1-1";
    const result = diffWaysToCompute(expression);
    expect(result).toEqual([0, 2]);
  });

  it('diffWaysToCompute should return [-34,-14,-10,-10,10] for expression = "2*3-4*5"', () => {
    const expression = "2*3-4*5";
    const result = diffWaysToCompute(expression);
    expect(result).toEqual([-34, -14, -10, -10, 10]);
  });
});
