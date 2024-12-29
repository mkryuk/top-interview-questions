import { numWays } from "./solution";

describe("Number of Ways to Form a Target String Given a Dictionary", () => {
  it('numWays should return 6 for words = ["acca","bbbb","caca"], target = "aba"', () => {
    const words = ["acca", "bbbb", "caca"];
    const target = "aba";
    const result = numWays(words, target);
    expect(result).toEqual(6);
  });

  it('numWays should return 4 for words = ["abba","baab"], target = "bab"', () => {
    const words = ["abba", "baab"];
    const target = "bab";
    const result = numWays(words, target);
    expect(result).toEqual(4);
  });
});
