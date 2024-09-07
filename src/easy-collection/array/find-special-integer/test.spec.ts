import { findSpecialInteger } from "./solution";

describe("Element Appearing More Than 25% In Sorted Array", () => {
  it("findSpecialInteger should return 6 for arr = [1,2,2,6,6,6,6,7,10]", () => {
    const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
    const result = findSpecialInteger(arr);
    expect(result).toEqual(6);
  });

  it("findSpecialInteger should return 1 for arr = [1,1]", () => {
    const arr = [1, 1];
    const result = findSpecialInteger(arr);
    expect(result).toEqual(1);
  });

  it("findSpecialInteger should return 3 for arr = [1,1,2,2,3,3,3,4]", () => {
    const arr = [1, 1, 2, 2, 3, 3, 3, 4];
    const result = findSpecialInteger(arr);
    expect(result).toEqual(3);
  });

  it("findSpecialInteger should return 3 for arr = [1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,11,12,12,12,12]", () => {
    const arr = [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12];
    const result = findSpecialInteger(arr);
    expect(result).toEqual(1);
  });
});
