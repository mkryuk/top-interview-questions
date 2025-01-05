import { shiftingLetters } from "./solution";

describe("Shifting Letters II", () => {
  it('shiftingLetters should return "ace" for s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]', () => {
    const s = "abc";
    const shifts = [
      [0, 1, 0],
      [1, 2, 1],
      [0, 2, 1],
    ];
    const result = shiftingLetters(s, shifts);
    expect(result).toEqual("ace");
  });

  it('shiftingLetters should return "catz" for s = "dztz", shifts = [[0,0,0],[1,1,1]]', () => {
    const s = "dztz";
    const shifts = [
      [0, 0, 0],
      [1, 1, 1],
    ];
    const result = shiftingLetters(s, shifts);
    expect(result).toEqual("catz");
  });
});
