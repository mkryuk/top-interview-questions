import { removeStars } from "./solution";

describe("Removing Stars From a String:", () => {
  it('removeStars should return "lecoe" for s = "leet**cod*e"', () => {
    const s = "leet**cod*e";
    const result = removeStars(s);
    expect(result).toEqual("lecoe");
  });

  it('removeStars should return "" for s = "erase*****"', () => {
    const s = "erase*****";
    const result = removeStars(s);
    expect(result).toEqual("");
  });

  it('removeStars should return "de" for s = "a*bc**def*g*"', () => {
    const s = "a*bc**def*g*";
    const result = removeStars(s);
    expect(result).toEqual("de");
  });
});
