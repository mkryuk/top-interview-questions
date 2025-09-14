import { spellchecker } from "./solution";

describe("966. Vowel Spellchecker", () => {
  it("spellchecker should pass test 1", () => {
    const wordlist = ["KiTe", "kite", "hare", "Hare"];
    const queries = ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"];
    const result = spellchecker(wordlist, queries);
    expect(result).toEqual(["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"]);
  });

  it("spellchecker should pass test 2", () => {
    const wordlist = ["yellow"];
    const queries = ["YellOw"];
    const result = spellchecker(wordlist, queries);
    expect(result).toEqual(["yellow"]);
  });
});
