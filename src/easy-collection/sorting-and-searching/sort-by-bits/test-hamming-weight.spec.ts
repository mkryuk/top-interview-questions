import { sortByBits } from "./solution-hamming-weight";

describe("Sort Integers by The Number of 1 Bits:", () => {
  it("sortByBits should return [0,1,2,4,8,3,5,6,7] for arr = [0,1,2,3,4,5,6,7,8]", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const result = sortByBits(arr);
    expect(result).toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7]);
  });
  it("sortByBits should return [1,2,4,8,16,32,64,128,256,512,1024] for arr = [1024,512,256,128,64,32,16,8,4,2,1]", () => {
    const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
    const result = sortByBits(arr);
    expect(result).toEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  });
});
