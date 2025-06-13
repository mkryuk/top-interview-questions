import { minimizeMax } from "./solution";

describe("2616. Minimize the Maximum Difference of Pairs", () => {
  it("minimizeMax should return 1 for nums = [10,1,2,7,1,3], p = 2", () => {
    const nums = [10, 1, 2, 7, 1, 3];
    const p = 2;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(1);
  });

  it("minimizeMax should return 0 for nums = [4,2,1,2], p = 1", () => {
    const nums = [4, 2, 1, 2];
    const p = 1;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(0);
  });

  it("minimizeMax should return 0 for nums = [0,5,3,4], p = 0", () => {
    const nums = [0, 5, 3, 4];
    const p = 0;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(0);
  });

  it("minimizeMax should return 1 for nums = [3,4,2,3,2,1,2], p = 3", () => {
    const nums = [3, 4, 2, 3, 2, 1, 2];
    const p = 3;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(1);
  });

  it("minimizeMax should return 1 for nums = [3,3,5,1,0,5,6,6], p = 4", () => {
    const nums = [3, 3, 5, 1, 0, 5, 6, 6];
    const p = 4;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(1);
  });

  it("minimizeMax should return 1 for nums = [3,0,5,0,0,1,6], p = 3", () => {
    const nums = [3, 0, 5, 0, 0, 1, 6];
    const p = 3;
    const result = minimizeMax(nums, p);
    expect(result).toEqual(1);
  });
});
