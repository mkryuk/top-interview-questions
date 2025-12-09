import { specialTriplets } from "./solution";

describe("3583. Count Special Triplets", () => {
  it("specialTriplets should return 1 for nums = [6,3,6]", () => {
    const nums = [6, 3, 6];
    const result = specialTriplets(nums);
    expect(result).toEqual(1);
  });

  it("specialTriplets should return 1 for nums = [0,1,0,0]", () => {
    const nums = [0, 1, 0, 0];
    const result = specialTriplets(nums);
    expect(result).toEqual(1);
  });

  it("specialTriplets should return 2 for nums = [8,4,2,8,4]", () => {
    const nums = [8, 4, 2, 8, 4];
    const result = specialTriplets(nums);
    expect(result).toEqual(2);
  });
});
