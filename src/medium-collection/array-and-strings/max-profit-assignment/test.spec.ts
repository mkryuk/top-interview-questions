import { maxProfitAssignment } from "./solution";

describe("Most Profit Assigning Work", () => {
  it("maxProfitAssignment should return 100 for difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]", () => {
    const difficulty = [2, 4, 6, 8, 10];
    const profit = [10, 20, 30, 40, 50];
    const worker = [4, 5, 6, 7];
    const result = maxProfitAssignment(difficulty, profit, worker);
    expect(result).toEqual(100);
  });

  it("maxProfitAssignment should return 0 for difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]", () => {
    const difficulty = [85, 47, 57];
    const profit = [24, 66, 99];
    const worker = [40, 25, 25];
    const result = maxProfitAssignment(difficulty, profit, worker);
    expect(result).toEqual(0);
  });
});
