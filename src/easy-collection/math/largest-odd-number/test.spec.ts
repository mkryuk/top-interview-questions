import { largestOddNumber } from "./solution";

describe("Largest Odd Number in String:", () => {
  it('largestOddNumber should return "5" for num = "52"', () => {
    const num = "52";
    const result = largestOddNumber(num);
    expect(result).toEqual("5");
  });

  it('largestOddNumber should return "" for num = "4206"', () => {
    const num = "4206";
    const result = largestOddNumber(num);
    expect(result).toEqual("");
  });

  it('largestOddNumber should return "35427" for num = "35427"', () => {
    const num = "35427";
    const result = largestOddNumber(num);
    expect(result).toEqual("35427");
  });
});
