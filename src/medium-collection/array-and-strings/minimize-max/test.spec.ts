import { minimizeMax } from "./solution";

describe("Minimize the Maximum Difference of Pairs:", () => {
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
});
