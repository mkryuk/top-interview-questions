import { commonChars } from "./solution";

describe("Find Common Characters", () => {
  it('commonChars should return ["e","l","l"] for words = ["bella","label","roller"]', () => {
    const words = ["bella", "label", "roller"];
    const result = commonChars(words);
    expect(result).toEqual(["e", "l", "l"]);
  });

  it('commonChars should return ["c","o"] for words = ["cool","lock","cook"]', () => {
    const words = ["cool", "lock", "cook"];
    const result = commonChars(words);
    expect(result).toEqual(["c", "o"]);
  });
});
