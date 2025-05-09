import { countBalancedPermutations } from "./solution";

describe("Count Number of Balanced Permutations", () => {
  it('countBalancedPermutations should return 2 for num = "123"', () => {
    const num = "123";
    const result = countBalancedPermutations(num);
    expect(result).toEqual(2);
  });

  it('countBalancedPermutations should return 1 for num = "112"', () => {
    const num = "112";
    const result = countBalancedPermutations(num);
    expect(result).toEqual(1);
  });

  it('countBalancedPermutations should return 0 for num = "12345"', () => {
    const num = "12345";
    const result = countBalancedPermutations(num);
    expect(result).toEqual(0);
  });
});
