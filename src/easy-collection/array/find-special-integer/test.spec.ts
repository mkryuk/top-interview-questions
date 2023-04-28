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
});
