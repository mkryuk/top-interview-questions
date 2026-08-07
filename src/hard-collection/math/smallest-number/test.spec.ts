import { smallestNumber } from "./solution";

describe("3348. Smallest Divisible Digit Product II:", () => {
  it('smallestNumber should return "1488" for num = "1234", t = 256', () => {
    const num = "1234";
    const t = 256;
    const result = smallestNumber(num, t);
    expect(result).toEqual("1488");
  });

  it('smallestNumber should return "12355" for num = "12355", t = 50', () => {
    const num = "12355";
    const t = 50;
    const result = smallestNumber(num, t);
    expect(result).toEqual("12355");
  });

  it('smallestNumber should return "-1" for num = "11111", t = 26', () => {
    const num = "11111";
    const t = 26;
    const result = smallestNumber(num, t);
    expect(result).toEqual("-1");
  });
});
