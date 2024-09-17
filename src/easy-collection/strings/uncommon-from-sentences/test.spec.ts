import { uncommonFromSentences } from "./solution";

describe("Uncommon Words from Two Sentences", () => {
  it('uncommonFromSentences should return ["sweet","sour"] for s1 = "this apple is sweet", s2 = "this apple is sour"', () => {
    const s1 = "this apple is sweet";
    const s2 = "this apple is sour";
    const result = uncommonFromSentences(s1, s2);
    expect(result).toEqual(["sweet", "sour"]);
  });

  it('uncommonFromSentences should return ["banana"] for s1 = "apple apple", s2 = "banana"', () => {
    const s1 = "apple apple";
    const s2 = "banana";
    const result = uncommonFromSentences(s1, s2);
    expect(result).toEqual(["banana"]);
  });
});
