import { addSpaces } from "./solution";

describe("Adding Spaces to a String", () => {
  it('addSpaces should return "Leetcode Helps Me Learn" for s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]', () => {
    const s = "LeetcodeHelpsMeLearn";
    const spaces = [8, 13, 15];
    const result = addSpaces(s, spaces);
    expect(result).toEqual("Leetcode Helps Me Learn");
  });

  it('addSpaces should return "i code in py thon" for s = "icodeinpython", spaces = [1,5,7,9]', () => {
    const s = "icodeinpython";
    const spaces = [1, 5, 7, 9];
    const result = addSpaces(s, spaces);
    expect(result).toEqual("i code in py thon");
  });

  it('addSpaces should return " s p a c i n g" for s = "spacing", spaces = [0,1,2,3,4,5,6]', () => {
    const s = "spacing";
    const spaces = [0, 1, 2, 3, 4, 5, 6];
    const result = addSpaces(s, spaces);
    expect(result).toEqual(" s p a c i n g");
  });
});
