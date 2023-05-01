import { average } from "./solution";

describe("Average Salary Excluding the Minimum and Maximum Salary", () => {
  it("average should return 2500 for salary = [4000,3000,1000,2000]", () => {
    const salary = [4000, 3000, 1000, 2000];
    const result = average(salary);
    expect(result).toEqual(2500);
  });

  it("average should return 2000 for salary = [1000,2000,3000]", () => {
    const salary = [1000, 2000, 3000];
    const result = average(salary);
    expect(result).toEqual(2000);
  });
});
