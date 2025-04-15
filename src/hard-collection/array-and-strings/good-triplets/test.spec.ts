import { goodTriplets } from "./solution";

describe("Count Good Triplets in an Array", () => {
  it("goodTriplets should return 1 for nums1 = [2,0,1,3], nums2 = [0,1,2,3]", () => {
    const nums1 = [2, 0, 1, 3];
    const nums2 = [0, 1, 2, 3];
    const result = goodTriplets(nums1, nums2);
    expect(result).toEqual(1);
  });

  it("goodTriplets should return 4 for nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]", () => {
    const nums1 = [4, 0, 1, 3, 2];
    const nums2 = [4, 1, 0, 2, 3];
    const result = goodTriplets(nums1, nums2);
    expect(result).toEqual(4);
  });
});
