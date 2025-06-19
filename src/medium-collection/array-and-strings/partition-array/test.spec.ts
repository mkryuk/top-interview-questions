import { partitionArray } from "./solution";

describe("2294. Partition Array Such That Maximum Difference Is K", () => {
  it("partitionArray should return 2 for nums = [3,6,1,2,5], k = 2", () => {
    const nums = [3, 6, 1, 2, 5];
    const k = 2;
    const result = partitionArray(nums, k);
    expect(result).toEqual(2);
  });

  it("partitionArray should return 2 for nums = [1,2,3], k = 1", () => {
    const nums = [1, 2, 3];
    const k = 1;
    const result = partitionArray(nums, k);
    expect(result).toEqual(2);
  });

  it("partitionArray should return 3 for nums = [2,2,4,5], k = 0", () => {
    const nums = [2, 2, 4, 5];
    const k = 0;
    const result = partitionArray(nums, k);
    expect(result).toEqual(3);
  });
});
