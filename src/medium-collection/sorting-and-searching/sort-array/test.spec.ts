import { sortArray } from "./solution";

describe("Sort an Array", () => {
  it("sortArray should return [1,2,3,5] for nums = [5,2,3,1]", () => {
    const nums = [5, 2, 3, 1];
    const result = sortArray(nums);
    expect(result).toEqual([1, 2, 3, 5]);
  });

  it("sortArray should return [0,0,1,1,2,5] for nums = [5,1,1,2,0,0]", () => {
    const nums = [5, 1, 1, 2, 0, 0];
    const result = sortArray(nums);
    expect(result).toEqual([0, 0, 1, 1, 2, 5]);
  });
});
