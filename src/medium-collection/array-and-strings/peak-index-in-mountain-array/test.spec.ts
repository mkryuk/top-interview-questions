import { peakIndexInMountainArray } from "./solution";

describe("Peak Index in a Mountain Array:", () => {
  it("peakIndexInMountainArray should return 1 for arr = [0,1,0]", () => {
    const arr = [0, 1, 0];
    const result = peakIndexInMountainArray(arr);
    expect(result).toEqual(1);
  });

  it("peakIndexInMountainArray should return 1 for arr = [0,2,1,0]", () => {
    const arr = [0, 2, 1, 0];
    const result = peakIndexInMountainArray(arr);
    expect(result).toEqual(1);
  });

  it("peakIndexInMountainArray should return 1 for arr = [0,10,5,2]", () => {
    const arr = [0, 10, 5, 2];
    const result = peakIndexInMountainArray(arr);
    expect(result).toEqual(1);
  });
});
