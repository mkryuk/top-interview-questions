import { fractionAddition } from "./solution";

describe("Fraction Addition and Subtraction", () => {
  it('fractionAddition should return "0/1" for expression = "-1/2+1/2"', () => {
    const expression = "-1/2+1/2";
    const result = fractionAddition(expression);
    expect(result).toEqual("0/1");
  });

  it('fractionAddition should return "1/3" for expression = "-1/2+1/2+1/3"', () => {
    const expression = "-1/2+1/2+1/3";
    const result = fractionAddition(expression);
    expect(result).toEqual("1/3");
  });

  it('fractionAddition should return "-1/6" for expression = "1/3-1/2"', () => {
    const expression = "1/3-1/2";
    const result = fractionAddition(expression);
    expect(result).toEqual("-1/6");
  });
});
