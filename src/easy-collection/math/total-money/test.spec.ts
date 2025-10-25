import { totalMoney } from "./solution";

describe("1716. Calculate Money in Leetcode Bank:", () => {
  it("totalMoney should return 10 for n = 4", () => {
    const n = 4;
    const result = totalMoney(n);
    expect(result).toEqual(10);
  });

  it("totalMoney should return 37 for n = 10", () => {
    const n = 10;
    const result = totalMoney(n);
    expect(result).toEqual(37);
  });

  it("totalMoney should return 96 for n = 20", () => {
    const n = 20;
    const result = totalMoney(n);
    expect(result).toEqual(96);
  });

  it("totalMoney should return 135 for n = 26", () => {
    const n = 26;
    const result = totalMoney(n);
    expect(result).toEqual(135);
  });
});
