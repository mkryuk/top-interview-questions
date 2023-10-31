import { findArray } from "./solution";

describe("Find The Original Array of Prefix Xor:", () => {
  it("findArray should return [5,7,2,3,2] for pref = [5,2,0,3,1]", () => {
    const pref = [5, 2, 0, 3, 1];
    const result = findArray(pref);
    expect(result).toEqual([5, 7, 2, 3, 2]);
  });

  it("findArray should return [13] for pref = [13]", () => {
    const pref = [13];
    const result = findArray(pref);
    expect(result).toEqual([13]);
  });
});
