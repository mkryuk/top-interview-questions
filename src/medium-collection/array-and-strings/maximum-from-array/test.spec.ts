import { minimumDeletions } from "./solution";

describe("2091. Removing Minimum and Maximum From Array:", () => {
  it("minimumDeletions should return 5 for nums = [2,10,7,5,4,1,8,6]", () => {
    const nums = [2, 10, 7, 5, 4, 1, 8, 6];
    const result = minimumDeletions(nums);
    expect(result).toEqual(5);
  });

  it("minimumDeletions should return 3 for nums = [0,-4,19,1,8,-2,-3,5]", () => {
    const nums = [0, -4, 19, 1, 8, -2, -3, 5];
    const result = minimumDeletions(nums);
    expect(result).toEqual(3);
  });

  it("minimumDeletions should return 1 for nums = [101]", () => {
    const nums = [101];
    const result = minimumDeletions(nums);
    expect(result).toEqual(1);
  });
});
