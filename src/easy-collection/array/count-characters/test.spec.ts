import { countCharacters } from "./solution";

describe("Find Words That Can Be Formed by Characters:", () => {
  it('countCharacters should return 6 for words = ["cat","bt","hat","tree"], chars = "atach"', () => {
    const words = ["cat", "bt", "hat", "tree"];
    const chars = "atach";
    const result = countCharacters(words, chars);
    expect(result).toEqual(6);
  });

  it('countCharacters should return 10 for words = ["hello","world","leetcode"], chars = "welldonehoneyr"', () => {
    const words = ["hello", "world", "leetcode"];
    const chars = "welldonehoneyr";
    const result = countCharacters(words, chars);
    expect(result).toEqual(10);
  });
});
