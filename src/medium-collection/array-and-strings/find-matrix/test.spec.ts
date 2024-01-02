import { findMatrix } from "./solution";

describe("Convert an Array Into a 2D Array With Conditions:", () => {
  it("findMatrix should return [[1,2,3,4],[1,3],[1]] for nums = [1,3,4,1,2,3,1]", () => {
    const nums = [1, 3, 4, 1, 2, 3, 1];
    const result = findMatrix(nums);
    expect(result).toEqual([[1, 2, 3, 4], [1, 3], [1]]);
  });

  it("findMatrix should return [[1,2,3,4]] for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = findMatrix(nums);
    expect(result).toEqual([[1, 2, 3, 4]]);
  });
});
