import { findTheDistanceValue } from "./solution";

describe("1385. Find the Distance Value Between Two Arrays:", () => {
  it("findTheDistanceValue should return 2 for arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2", () => {
    const arr1 = [4, 5, 8];
    const arr2 = [10, 9, 1, 8];
    const d = 2;
    const result = findTheDistanceValue(arr1, arr2, d);
    expect(result).toEqual(2);
  });

  it("findTheDistanceValue should return 2 for arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3", () => {
    const arr1 = [1, 4, 2, 3];
    const arr2 = [-4, -3, 6, 10, 20, 30];
    const d = 3;
    const result = findTheDistanceValue(arr1, arr2, d);
    expect(result).toEqual(2);
  });

  it("findTheDistanceValue should return 1 for arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6", () => {
    const arr1 = [2, 1, 100, 3];
    const arr2 = [-5, -2, 10, -3, 7];
    const d = 6;
    const result = findTheDistanceValue(arr1, arr2, d);
    expect(result).toEqual(1);
  });
});
