import { tupleSameProduct } from "./solution";

describe("Tuple with Same Product", () => {
  it("tupleSameProduct should return 8 for nums = [2,3,4,6]", () => {
    const nums = [2, 3, 4, 6];
    const result = tupleSameProduct(nums);
    expect(result).toEqual(8);
  });

  it("tupleSameProduct should return 16 for nums = [1,2,4,5,10]", () => {
    const nums = [1, 2, 4, 5, 10];
    const result = tupleSameProduct(nums);
    expect(result).toEqual(16);
  });
});
