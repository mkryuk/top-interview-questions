import { mincostToHireWorkers } from "./solution";

describe("Minimum Cost to Hire K Workers", () => {
  it("mincostToHireWorkers should return 105.00000 for quality = [10,20,5], wage = [70,50,30], k = 2", () => {
    const quality = [10, 20, 5];
    const wage = [70, 50, 30];
    const k = 2;
    const result = mincostToHireWorkers(quality, wage, k);
    expect(result).toEqual(105);
  });

  it("mincostToHireWorkers should return 30.66667 for quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3", () => {
    const quality = [3, 1, 10, 10, 1];
    const wage = [4, 8, 2, 2, 7];
    const k = 3;
    const result = mincostToHireWorkers(quality, wage, k);
    const epsilon = 0.00001;
    expect(Math.abs(result - 30.66667)).toBeLessThanOrEqual(epsilon);
  });
});
