import { replaceWords } from "./solution";

describe("Replace Words", () => {
  it('replaceWords should return "the cat was rat by the bat" for dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"', () => {
    const dictionary = ["cat", "bat", "rat"];
    const sentence = "the cattle was rattled by the battery";
    const result = replaceWords(dictionary, sentence);
    expect(result).toEqual("the cat was rat by the bat");
  });

  it('replaceWords should return "a a b c" for dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"', () => {
    const dictionary = ["a", "b", "c"];
    const sentence = "aadsfasf absbs bbab cadsfafs";
    const result = replaceWords(dictionary, sentence);
    expect(result).toEqual("a a b c");
  });
});
