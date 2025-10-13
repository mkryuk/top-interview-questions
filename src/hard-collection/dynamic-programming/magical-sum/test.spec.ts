import { magicalSum } from "./solution";

describe("3539. Find Sum of Array Product of Magical Sequences", () => {
  it("magicalSum should return 991600007 for m = 5, k = 5, nums = [1,10,100,10000,1000000]", () => {
    const m = 5;
    const k = 5;
    const nums = [1, 10, 100, 10000, 1000000];
    const result = magicalSum(m, k, nums);
    expect(result).toEqual(991600007);
  });

  it("magicalSum should return 170 for m = 2, k = 2, nums = [5,4,3,2,1]", () => {
    const m = 2;
    const k = 2;
    const nums = [5, 4, 3, 2, 1];
    const result = magicalSum(m, k, nums);
    expect(result).toEqual(170);
  });

  it("magicalSum should return 28 for m = 1, k = 1, nums = [28]", () => {
    const m = 1;
    const k = 1;
    const nums = [28];
    const result = magicalSum(m, k, nums);
    expect(result).toEqual(28);
  });
});
