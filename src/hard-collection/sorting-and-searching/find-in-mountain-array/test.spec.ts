import { MountainArray } from "./mountain-array";
import { findInMountainArray } from "./solution";

describe("Find in Mountain Array:", () => {
  it("findInMountainArray should return 2 for array = [1,2,3,4,5,3,1], target = 3", () => {
    const array = [1, 2, 3, 4, 5, 3, 1];
    const target = 3;
    const mountainArray = new MountainArray(array);
    const result = findInMountainArray(target, mountainArray);
    expect(result).toEqual(2);
  });

  it("findInMountainArray should return -1 for array = [0,1,2,4,2,1], target = 3", () => {
    const array = [0, 1, 2, 4, 2, 1];
    const target = 3;
    const mountainArray = new MountainArray(array);
    const result = findInMountainArray(target, mountainArray);
    expect(result).toEqual(-1);
  });
});
