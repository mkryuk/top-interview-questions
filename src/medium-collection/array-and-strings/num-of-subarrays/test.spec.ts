import { numOfSubarrays } from "./solution";

describe("Number of Sub-arrays With Odd Sum", () => {
  it("numOfSubarrays should return 4 for arr = [1,3,5]", () => {
    const arr = [1, 3, 5];
    const result = numOfSubarrays(arr);
    expect(result).toEqual(4);
  });

  it("numOfSubarrays should return 0 for arr = [2,4,6]", () => {
    const arr = [2, 4, 6];
    const result = numOfSubarrays(arr);
    expect(result).toEqual(0);
  });

  it("numOfSubarrays should return 16 for arr = [1,2,3,4,5,6,7]", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const result = numOfSubarrays(arr);
    expect(result).toEqual(16);
  });
});
