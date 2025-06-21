import { minimumDeletions } from "./solution";

describe("3085. Minimum Deletions to Make String K-Special", () => {
  it('minimumDeletions should return 3 word = "aabcaba", k = 0', () => {
    const word = "aabcaba";
    const k = 0;
    const result = minimumDeletions(word, k);
    expect(result).toEqual(3);
  });

  it('minimumDeletions should return 2 word = "dabdcbdcdcd", k = 2', () => {
    const word = "dabdcbdcdcd";
    const k = 2;
    const result = minimumDeletions(word, k);
    expect(result).toEqual(2);
  });

  it('minimumDeletions should return 1 word = "aaabaaa", k = 2', () => {
    const word = "aaabaaa";
    const k = 2;
    const result = minimumDeletions(word, k);
    expect(result).toEqual(1);
  });
});
