import { removeElement } from "./solution";

describe("Remove Element:", () => {
  it("removeElement should return 2 for nums = [3,2,2,3], val = 3", () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    expect(result).toEqual(2);
    expect(result).not.toContain(val);
  });

  it("removeElement should return 5 for nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const result = removeElement(nums, val);
    expect(result).toEqual(5);
    expect(result).not.toContain(val);
  });
});
