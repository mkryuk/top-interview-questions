import { countVowelPermutation } from "./solution";

describe("Count Vowels Permutation:", () => {
  it("countVowelPermutation should return 5 for n = 1", () => {
    const n = 1;
    const result = countVowelPermutation(n);
    expect(result).toEqual(5);
  });

  it("countVowelPermutation should return 5 for n = 2", () => {
    const n = 2;
    const result = countVowelPermutation(n);
    expect(result).toEqual(10);
  });

  it("countVowelPermutation should return 68 for n = 5", () => {
    const n = 5;
    const result = countVowelPermutation(n);
    expect(result).toEqual(68);
  });
});
