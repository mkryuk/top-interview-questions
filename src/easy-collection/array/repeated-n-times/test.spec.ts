import { repeatedNTimes } from "./solution";

describe("961. N-Repeated Element in Size 2N Array", () => {
  it("repeatedNTimes should return 3 for nums = [1,2,3,3]", () => {
    const nums = [1, 2, 3, 3];
    const result = repeatedNTimes(nums);
    expect(result).toEqual(3);
  });

  it("repeatedNTimes should return 2 for nums = [2,1,2,5,3,2]", () => {
    const nums = [2, 1, 2, 5, 3, 2];
    const result = repeatedNTimes(nums);
    expect(result).toEqual(2);
  });

  it("repeatedNTimes should return 5 for nums = [5,1,5,2,5,3,5,4]", () => {
    const nums = [5, 1, 5, 2, 5, 3, 5, 4];
    const result = repeatedNTimes(nums);
    expect(result).toEqual(5);
  });
});
