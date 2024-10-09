import { minAddToMakeValid } from "./solution";

describe("Minimum Add to Make Parentheses Valid", () => {
  it('minAddToMakeValid should return 1 for s = "())"', () => {
    const s = "())";
    const result = minAddToMakeValid(s);
    expect(result).toEqual(1);
  });

  it('minAddToMakeValid should return 3 for s = "((("', () => {
    const s = "(((";
    const result = minAddToMakeValid(s);
    expect(result).toEqual(3);
  });
});
