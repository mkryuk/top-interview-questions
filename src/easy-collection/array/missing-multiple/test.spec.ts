import { missingMultiple } from "./solution";

describe("3718. Smallest Missing Multiple of K:", () => {
  it("missingMultiple should return 10 for nums = [8,2,3,4,6], k = 2", () => {
    const nums = [8, 2, 3, 4, 6];
    const k = 2;
    const result = missingMultiple(nums, k);
    expect(result).toEqual(10);
  });

  it("missingMultiple should return 5 for nums = [1,4,7,10,15], k = 5", () => {
    const nums = [1, 4, 7, 10, 15];
    const k = 5;
    const result = missingMultiple(nums, k);
    expect(result).toEqual(5);
  });
});
