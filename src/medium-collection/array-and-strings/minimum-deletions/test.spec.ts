import { minimumDeletions } from "./solution";

describe("Minimum Deletions to Make String Balanced", () => {
  it('minimumDeletions should return 2 for s = "aababbab"', () => {
    const s = "aababbab";
    const result = minimumDeletions(s);
    expect(result).toEqual(2);
  });

  it('minimumDeletions should return 2 for s = "bbaaaaabb"', () => {
    const s = "bbaaaaabb";
    const result = minimumDeletions(s);
    expect(result).toEqual(2);
  });

  it('minimumDeletions should return 25 for s = "ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa"', () => {
    const s =
      "ababaaaabbbbbaaababbbbbbaaabbaababbabbbbaabbbbaabbabbabaabbbababaa";
    const result = minimumDeletions(s);
    expect(result).toEqual(25);
  });
});
