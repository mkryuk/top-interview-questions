import { kthSmallestProduct } from "./solution";

describe("2040. Kth Smallest Product of Two Sorted Arrays", () => {
  it("kthSmallestProduct should return 8 for nums1 = [2,5], nums2 = [3,4], k = 2", () => {
    const nums1 = [2, 5];
    const nums2 = [3, 4];
    const k = 2;
    const result = kthSmallestProduct(nums1, nums2, k);
    expect(result).toEqual(8);
  });

  it("kthSmallestProduct should return 0 for nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6", () => {
    const nums1 = [-4, -2, 0, 3];
    const nums2 = [2, 4];
    const k = 6;
    const result = kthSmallestProduct(nums1, nums2, k);
    expect(result).toEqual(0);
  });

  it("kthSmallestProduct should return -6 for nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3", () => {
    const nums1 = [-2, -1, 0, 1, 2];
    const nums2 = [-3, -1, 2, 4, 5];
    const k = 3;
    const result = kthSmallestProduct(nums1, nums2, k);
    expect(result).toEqual(-6);
  });
});
