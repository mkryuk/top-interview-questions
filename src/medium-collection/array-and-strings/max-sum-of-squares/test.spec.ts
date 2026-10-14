import { maxSumOfSquares } from "./solution";

describe("3723. Maximize Sum of Squares of Digits:", () => {
  it('maxSumOfSquares should return "30" for num = 2, sum = 3', () => {
    const num = 2;
    const sum = 3;
    const result = maxSumOfSquares(num, sum);
    expect(result).toEqual("30");
  });

  it('maxSumOfSquares should return "98" for num = 2, sum = 17', () => {
    const num = 2;
    const sum = 17;
    const result = maxSumOfSquares(num, sum);
    expect(result).toEqual("98");
  });

  it('maxSumOfSquares should return "" for num = 1, sum = 10', () => {
    const num = 1;
    const sum = 10;
    const result = maxSumOfSquares(num, sum);
    expect(result).toEqual("");
  });
});
