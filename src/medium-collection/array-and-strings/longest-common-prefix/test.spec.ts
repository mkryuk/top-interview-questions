import { longestCommonPrefix } from "./solution";

describe("Find the Length of the Longest Common Prefix", () => {
  it("longestCommonPrefix should return 3 for arr1 = [1,10,100], arr2 = [1000]", () => {
    const arr1 = [1, 10, 100];
    const arr2 = [1000];
    const result = longestCommonPrefix(arr1, arr2);
    expect(result).toEqual(3);
  });

  it("longestCommonPrefix should return 0 for arr1 = [1,2,3], arr2 = [4,4,4]", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 4, 4];
    const result = longestCommonPrefix(arr1, arr2);
    expect(result).toEqual(0);
  });
});
