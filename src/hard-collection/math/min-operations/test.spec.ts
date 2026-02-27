import { minOperations } from "./solution";

describe("3666. Minimum Operations to Equalize Binary String:", () => {
  it('minOperations should return 1 for s = "110", k = 1', () => {
    const s = "110";
    const k = 1;
    const result = minOperations(s, k);
    expect(result).toEqual(1);
  });

  it('minOperations should return 2 for s = "0101", k = 3', () => {
    const s = "0101";
    const k = 3;
    const result = minOperations(s, k);
    expect(result).toEqual(2);
  });

  it('minOperations should return -1 for s = "101", k = 2', () => {
    const s = "101";
    const k = 2;
    const result = minOperations(s, k);
    expect(result).toEqual(-1);
  });
});
