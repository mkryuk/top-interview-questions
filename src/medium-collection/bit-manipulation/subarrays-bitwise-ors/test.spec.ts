import { subarrayBitwiseORs } from "./solution";

describe("898. Bitwise ORs of Subarrays", () => {
  it("subarrayBitwiseORs should return 1 for arr = [0]", () => {
    const arr = [0];
    const result = subarrayBitwiseORs(arr);
    expect(result).toEqual(1);
  });

  it("subarrayBitwiseORs should return 3 for arr = [1,1,2]", () => {
    const arr = [1, 1, 2];
    const result = subarrayBitwiseORs(arr);
    expect(result).toEqual(3);
  });

  it("subarrayBitwiseORs should return 6 for arr = [1,2,4]", () => {
    const arr = [1, 2, 4];
    const result = subarrayBitwiseORs(arr);
    expect(result).toEqual(6);
  });
});
