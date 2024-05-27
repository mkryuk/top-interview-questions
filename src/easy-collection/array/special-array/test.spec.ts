import { specialArray } from "./solution";

describe("Special Array With X Elements Greater Than or Equal X", () => {
  it("specialArray should return 2 for nums = [3,5]", () => {
    const nums = [3, 5];
    const result = specialArray(nums);
    expect(result).toEqual(2);
  });

  it("specialArray should return -1 for nums = [0,0]", () => {
    const nums = [0, 0];
    const result = specialArray(nums);
    expect(result).toEqual(-1);
  });

  it("specialArray should return 3 for nums = [0,4,3,0,4]", () => {
    const nums = [0, 4, 3, 0, 4];
    const result = specialArray(nums);
    expect(result).toEqual(3);
  });
});
