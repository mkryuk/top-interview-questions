import { removeElement } from "./solution-2";

describe("Remove Element:", () => {
  it("removeElement should return 2 for nums = [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    expect(result).toEqual(2);
    expect(nums.slice(0, result)).not.toContain(val);
  });

  it("removeElement should return 5 for nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const result = removeElement(nums, val);
    expect(result).toEqual(5);
    expect(nums.slice(0, result)).not.toContain(val);
  });

  it("removeElement should return 5 for nums = [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    expect(result).toEqual(2);
    expect(nums.slice(0, result)).not.toContain(val);
  });

  it("removeElement should return 5 for nums = [3,2,2,2], val = 2", () => {
    const nums = [3, 2, 2, 2];
    const val = 2;
    const result = removeElement(nums, val);
    expect(result).toEqual(1);
    expect(nums.slice(0, result)).not.toContain(val);
  });

  it("removeElement should return 0 for nums = [1], val = 1", () => {
    const nums = [1];
    const val = 1;
    const result = removeElement(nums, val);
    expect(result).toEqual(0);
    expect(nums.slice(0, result)).not.toContain(val);
  });
});
