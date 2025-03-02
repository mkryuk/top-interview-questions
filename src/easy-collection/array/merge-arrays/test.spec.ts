import { mergeArrays } from "./solution";

describe("Merge Two 2D Arrays by Summing Values", () => {
  it("mergeArrays should return [[1,6],[2,3],[3,2],[4,6]] for nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]", () => {
    const nums1 = [
      [1, 2],
      [2, 3],
      [4, 5],
    ];
    const nums2 = [
      [1, 4],
      [3, 2],
      [4, 1],
    ];
    const result = mergeArrays(nums1, nums2);
    expect(result).toEqual([
      [1, 6],
      [2, 3],
      [3, 2],
      [4, 6],
    ]);
  });

  it("mergeArrays should return [[1,3],[2,4],[3,6],[4,3],[5,5]] for nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]", () => {
    const nums1 = [
      [2, 4],
      [3, 6],
      [5, 5],
    ];
    const nums2 = [
      [1, 3],
      [4, 3],
    ];
    const result = mergeArrays(nums1, nums2);
    expect(result).toEqual([
      [1, 3],
      [2, 4],
      [3, 6],
      [4, 3],
      [5, 5],
    ]);
  });
});
