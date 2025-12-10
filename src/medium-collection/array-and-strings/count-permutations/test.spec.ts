import { countPermutations } from "./solution";

describe("3577. Count the Number of Computer Unlocking Permutations", () => {
  it("countPermutations should return 2 for complexity = [1,2,3]", () => {
    const complexity = [1, 2, 3];
    const result = countPermutations(complexity);
    expect(result).toEqual(2);
  });

  it("countPermutations should return 0 for complexity = [3,3,3,4,4,4]", () => {
    const complexity = [3, 3, 3, 4, 4, 4];
    const result = countPermutations(complexity);
    expect(result).toEqual(0);
  });
});
