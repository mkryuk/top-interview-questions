import { bestClosingTime } from "./solution";

describe("Minimum Penalty for a Shop:", () => {
  it('bestClosingTime should return 2 for customers = "YYNY"', () => {
    const customers = "YYNY";
    const result = bestClosingTime(customers);
    expect(result).toEqual(2);
  });

  it('bestClosingTime should return 0 for customers = "NNNNN"', () => {
    const customers = "NNNNN";
    const result = bestClosingTime(customers);
    expect(result).toEqual(0);
  });

  it('bestClosingTime should return 4 for customers = "YYYY"', () => {
    const customers = "YYYY";
    const result = bestClosingTime(customers);
    expect(result).toEqual(4);
  });

  it('bestClosingTime should return 6 for customers = "YNNYYYNYNY"', () => {
    const customers = "YNNYYYNYNY";
    const result = bestClosingTime(customers);
    expect(result).toEqual(6);
  });
});
