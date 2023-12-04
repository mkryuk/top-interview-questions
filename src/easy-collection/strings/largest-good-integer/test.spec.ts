import { largestGoodInteger } from "./solution";

describe("Largest 3-Same-Digit Number in String:", () => {
  it('largestGoodInteger should return "777" for num = "6777133339"', () => {
    const num = "6777133339";
    const result = largestGoodInteger(num);
    expect(result).toEqual("777");
  });

  it('largestGoodInteger should return "000" for num = "2300019"', () => {
    const num = "2300019";
    const result = largestGoodInteger(num);
    expect(result).toEqual("000");
  });

  it('largestGoodInteger should return "" for num = "42352338"', () => {
    const num = "42352338";
    const result = largestGoodInteger(num);
    expect(result).toEqual("");
  });
});
