import { findFinalValue } from "./solution";

describe("2154. Keep Multiplying Found Values by Two", () => {
  it("findFinalValue should return 24 for nums = [5,3,6,1,12], original = 3", () => {
    const nums = [5, 3, 6, 1, 12];
    const original = 3;
    const result = findFinalValue(nums, original);
    expect(result).toEqual(24);
  });

  it("findFinalValue should return 4 for nums = [2,7,9], original = 4", () => {
    const nums = [2, 7, 9];
    const original = 4;
    const result = findFinalValue(nums, original);
    expect(result).toEqual(4);
  });
});
