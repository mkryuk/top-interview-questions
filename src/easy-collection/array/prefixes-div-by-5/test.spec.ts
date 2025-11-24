import { prefixesDivBy5 } from "./solution";

describe("1018. Binary Prefix Divisible By 5", () => {
  it("prefixesDivBy5 should return [true,false,false] for nums = [0,1,1]", () => {
    const nums = [0, 1, 1];
    const result = prefixesDivBy5(nums);
    expect(result).toEqual([true, false, false]);
  });

  it("prefixesDivBy5 should return [false,false,false] for nums = [1,1,1]", () => {
    const nums = [1, 1, 1];
    const result = prefixesDivBy5(nums);
    expect(result).toEqual([false, false, false]);
  });
});
