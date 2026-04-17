import { minMirrorPairDistance } from "./solution";

describe("3761. Minimum Absolute Distance Between Mirror Pairs:", () => {
  it("minMirrorPairDistance should return 1 for nums = [12,21,45,33,54]", () => {
    const nums = [12, 21, 45, 33, 54];
    const result = minMirrorPairDistance(nums);
    expect(result).toEqual(1);
  });

  it("minMirrorPairDistance should return 1 for nums = [120,21]", () => {
    const nums = [120, 21];
    const result = minMirrorPairDistance(nums);
    expect(result).toEqual(1);
  });

  it("minMirrorPairDistance should return -1 for nums = [21,120]", () => {
    const nums = [21, 120];
    const result = minMirrorPairDistance(nums);
    expect(result).toEqual(-1);
  });
});
