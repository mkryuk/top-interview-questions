import { totalCost } from "./solution";

describe("Total Cost to Hire K Workers:", () => {
  it("totalCost should return 11 for costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4", () => {
    const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8];
    const k = 3;
    const candidates = 4;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(11);
  });

  it("totalCost should return 4 for costs = [1,2,4,1], k = 3, candidates = 3", () => {
    const costs = [1, 2, 4, 1];
    const k = 3;
    const candidates = 3;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(4);
  });

  it("totalCost should return 1407 for test 3", () => {
    const costs = [
      28, 35, 21, 13, 21, 72, 35, 52, 74, 92, 25, 65, 77, 1, 73, 32, 43, 68, 8,
      100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99, 83, 5, 21, 76,
      34,
    ];
    const k = 32;
    const candidates = 12;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(1407);
  });

  it("totalCost should return 1407 for test 3", () => {
    const costs = [
      18, 64, 12, 21, 21, 78, 36, 58, 88, 58, 99, 26, 92, 91, 53, 10, 24, 25,
      20, 92, 73, 63, 51, 65, 87, 6, 17, 32, 14, 42, 46, 65, 43, 9, 75,
    ];
    const k = 13;
    const candidates = 23;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(223);
  });
});
