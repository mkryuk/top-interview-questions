import { findLucky } from "./solution";

describe("1394. Find Lucky Integer in an Array", () => {
  it("findLucky should return 2 for arr = [2,2,3,4]", () => {
    const arr = [2, 2, 3, 4];
    const result = findLucky(arr);
    expect(result).toEqual(2);
  });

  it("findLucky should return 3 for arr = [1,2,2,3,3,3]", () => {
    const arr = [1, 2, 2, 3, 3, 3];
    const result = findLucky(arr);
    expect(result).toEqual(3);
  });

  it("findLucky should return -1 for arr = [2,2,2,3,3]", () => {
    const arr = [2, 2, 2, 3, 3];
    const result = findLucky(arr);
    expect(result).toEqual(-1);
  });
});
