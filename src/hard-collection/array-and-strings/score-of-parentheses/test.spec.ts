import { scoreOfParentheses } from "./solution";

describe("856. Score of Parentheses:", () => {
  it('scoreOfParentheses should return 1 for s = "()"', () => {
    const s = "()";
    const result = scoreOfParentheses(s);
    expect(result).toBe(1);
  });

  it('scoreOfParentheses should return 2 for s = "(())"', () => {
    const s = "(())";
    const result = scoreOfParentheses(s);
    expect(result).toBe(2);
  });

  it('scoreOfParentheses should return 2 for s = "()()"', () => {
    const s = "()()";
    const result = scoreOfParentheses(s);
    expect(result).toBe(2);
  });
});
