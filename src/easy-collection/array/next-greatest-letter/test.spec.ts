import { nextGreatestLetter } from "./solution";

describe("744. Find Smallest Letter Greater Than Target:", () => {
  it('nextGreatestLetter should return "c" for letters = ["c","f","j"], target = "a"', () => {
    const letters = ["c", "f", "j"];
    const target = "a";
    const result = nextGreatestLetter(letters, target);
    expect(result).toEqual("c");
  });

  it('nextGreatestLetter should return "f" for letters = ["c","f","j"], target = "c"', () => {
    const letters = ["c", "f", "j"];
    const target = "c";
    const result = nextGreatestLetter(letters, target);
    expect(result).toEqual("f");
  });

  it('nextGreatestLetter should return "x" for letters = ["x","x","y","y"], target = "z"', () => {
    const letters = ["x", "x", "y", "y"];
    const target = "z";
    const result = nextGreatestLetter(letters, target);
    expect(result).toEqual("x");
  });

  it('nextGreatestLetter should return "x" for letters = ["c","f","j"], target = "g"', () => {
    const letters = ["c", "f", "j"];
    const target = "g";
    const result = nextGreatestLetter(letters, target);
    expect(result).toEqual("j");
  });
});
