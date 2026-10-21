import { minOperations } from "./solution";

describe("3863. Minimum Operations to Sort a String:", () => {
  it('minOperations should return 1 for s = "dog"', () => {
    const s = "dog";
    const result = minOperations(s);
    expect(result).toEqual(1);
  });

  it('minOperations should return 2 for s = "card"', () => {
    const s = "card";
    const result = minOperations(s);
    expect(result).toEqual(2);
  });

  it('minOperations should return -1 for s = "gf"', () => {
    const s = "gf";
    const result = minOperations(s);
    expect(result).toEqual(-1);
  });
});
