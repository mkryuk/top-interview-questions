import { replaceNonCoprimes } from "./solution";

describe("2197. Replace Non-Coprime Numbers in Array", () => {
  it("replaceNonCoprimes should return [12,7,6] for nums = [6,4,3,2,7,6,2]", () => {
    const nums = [6, 4, 3, 2, 7, 6, 2];
    const result = replaceNonCoprimes(nums);
    expect(result).toEqual([12, 7, 6]);
  });

  it("replaceNonCoprimes should return [2,1,1,3] for nums = [2,2,1,1,3,3,3]", () => {
    const nums = [2, 2, 1, 1, 3, 3, 3];
    const result = replaceNonCoprimes(nums);
    expect(result).toEqual([2, 1, 1, 3]);
  });
});
