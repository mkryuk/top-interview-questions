import { jobScheduling } from "./solution";

describe("Maximum Profit in Job Scheduling:", () => {
  it("jobScheduling should return 120 startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]", () => {
    const startTime = [1, 2, 3, 3];
    const endTime = [3, 4, 5, 6];
    const profit = [50, 10, 40, 70];
    const result = jobScheduling(startTime, endTime, profit);
    expect(result).toEqual(120);
  });

  it("jobScheduling should return 150 for startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]", () => {
    const startTime = [1, 2, 3, 4, 6];
    const endTime = [3, 5, 10, 6, 9];
    const profit = [20, 20, 100, 70, 60];
    const result = jobScheduling(startTime, endTime, profit);
    expect(result).toEqual(150);
  });

  it("jobScheduling should return 6 for startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]", () => {
    const startTime = [1, 1, 1];
    const endTime = [2, 3, 4];
    const profit = [5, 6, 4];
    const result = jobScheduling(startTime, endTime, profit);
    expect(result).toEqual(6);
  });
});
