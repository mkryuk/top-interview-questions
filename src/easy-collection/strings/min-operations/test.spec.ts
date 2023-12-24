import { minOperations } from "./solution";

describe("Minimum Changes To Make Alternating Binary String:", () => {
  it('minOperations should return 1 for s = "0100"', () => {
    const s = "0100";
    const result = minOperations(s);
    expect(result).toEqual(1);
  });

  it('minOperations should return 0 for s = "10"', () => {
    const s = "10";
    const result = minOperations(s);
    expect(result).toEqual(0);
  });

  it('minOperations should return 2 for s = "1111"', () => {
    const s = "1111";
    const result = minOperations(s);
    expect(result).toEqual(2);
  });
});
