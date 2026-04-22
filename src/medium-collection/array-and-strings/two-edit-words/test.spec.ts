import { twoEditWords } from "./solution";

describe("2452. Words Within Two Edits of Dictionary:", () => {
  it('twoEditWords should return ["word","note","wood"] for queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]', () => {
    const queries = ["word", "note", "ants", "wood"];
    const dictionary = ["wood", "joke", "moat"];
    const result = twoEditWords(queries, dictionary);
    expect(result).toEqual(["word", "note", "wood"]);
  });

  it('twoEditWords should return [] for queries = ["yes"], dictionary = ["not"]', () => {
    const queries = ["yes"];
    const dictionary = ["not"];
    const result = twoEditWords(queries, dictionary);
    expect(result).toEqual([]);
  });
});
