import { maximumSwap } from "./solution";

describe("Maximum Swap", () => {
  it("maximumSwap should return 7236 for num = 2736", () => {
    const num = 2736;
    const result = maximumSwap(num);
    expect(result).toEqual(7236);
  });

  it("maximumSwap should return 9973 for num = 9973", () => {
    const num = 9973;
    const result = maximumSwap(num);
    expect(result).toEqual(9973);
  });
});
