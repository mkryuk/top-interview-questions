import { relativeSortArray } from "./solution";

describe("Relative Sort Array", () => {
  it("relativeSortArray should return [2,2,2,1,4,3,3,9,6,7,19] for arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]", () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
    const arr2 = [2, 1, 4, 3, 9, 6];
    const result = relativeSortArray(arr1, arr2);
    expect(result).toEqual([2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]);
  });

  it("relativeSortArray should return [22,28,8,6,17,44] for arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]", () => {
    const arr1 = [28, 6, 22, 8, 44, 17];
    const arr2 = [22, 28, 8, 6];
    const result = relativeSortArray(arr1, arr2);
    expect(result).toEqual([22, 28, 8, 6, 17, 44]);
  });
});
