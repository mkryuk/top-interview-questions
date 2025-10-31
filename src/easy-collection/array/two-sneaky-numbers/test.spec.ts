import { getSneakyNumbers } from "./solution";

describe("3289. The Two Sneaky Numbers of Digitville", () => {
  it("getSneakyNumbers should return [0,1] for nums = [0,1,1,0]", () => {
    const nums = [0, 1, 1, 0];
    const result = getSneakyNumbers(nums);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  it("getSneakyNumbers should return [2,3] for nums = [0,3,2,1,3,2]", () => {
    const nums = [0, 3, 2, 1, 3, 2];
    const result = getSneakyNumbers(nums);
    expect(result.sort((a, b) => a - b)).toEqual([2, 3]);
  });

  it("getSneakyNumbers should return [4,5] for nums = [7,1,5,4,3,4,6,0,9,5,8,2]", () => {
    const nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];
    const result = getSneakyNumbers(nums);
    expect(result.sort((a, b) => a - b)).toEqual([4, 5]);
  });
});
