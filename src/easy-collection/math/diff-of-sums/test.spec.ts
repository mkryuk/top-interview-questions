import { differenceOfSums } from "./solution";

describe("Divisible and Non-divisible Sums Difference", () => {
  it("differenceOfSums should return 19 for n = 10, m = 3", () => {
    const n = 10;
    const m = 3;
    const result = differenceOfSums(n, m);
    expect(result).toEqual(19);
  });

  it("differenceOfSums should return 15 for n = 5, m = 6", () => {
    const n = 5;
    const m = 6;
    const result = differenceOfSums(n, m);
    expect(result).toEqual(15);
  });

  it("differenceOfSums should return -15 for n = 5, m = 1", () => {
    const n = 5;
    const m = 1;
    const result = differenceOfSums(n, m);
    expect(result).toEqual(-15);
  });
});
