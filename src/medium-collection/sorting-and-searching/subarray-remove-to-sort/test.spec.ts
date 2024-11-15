import { findLengthOfShortestSubarray } from "./solution";

describe("Shortest Subarray to be Removed to Make Array Sorted", () => {
  it("findLengthOfShortestSubarray should return 3 for arr = [1,2,3,10,4,2,3,5]", () => {
    const arr = [1, 2, 3, 10, 4, 2, 3, 5];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toEqual(3);
  });

  it("findLengthOfShortestSubarray should return 4 for arr = [5,4,3,2,1]", () => {
    const arr = [5, 4, 3, 2, 1];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toEqual(4);
  });

  it("findLengthOfShortestSubarray should return 0 for arr = [1,2,3]", () => {
    const arr = [1, 2, 3];
    const result = findLengthOfShortestSubarray(arr);
    expect(result).toEqual(0);
  });
});
