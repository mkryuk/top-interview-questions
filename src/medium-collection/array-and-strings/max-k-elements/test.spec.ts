import { maxKelements } from "./solution";

describe("Maximal Score After Applying K Operations", () => {
  it("maxKelements should return 50 for nums = [10,10,10,10,10], k = 5", () => {
    const nums = [10, 10, 10, 10, 10];
    const k = 5;
    const result = maxKelements(nums, k);
    expect(result).toEqual(50);
  });

  it("maxKelements should return 17 for nums = [1,10,3,3,3], k = 3", () => {
    const nums = [1, 10, 3, 3, 3];
    const k = 3;
    const result = maxKelements(nums, k);
    expect(result).toEqual(17);
  });
});
