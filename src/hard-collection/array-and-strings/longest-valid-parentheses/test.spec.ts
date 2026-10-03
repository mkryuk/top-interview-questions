import { longestValidParentheses } from "./solution";

describe("32. Longest Valid Parentheses:", () => {
  it('longestValidParentheses should return 2 for s = "(()"', () => {
    const s = "(()";
    const result = longestValidParentheses(s);
    expect(result).toBe(2);
  });

  it('longestValidParentheses should return 4 for s = ")()())"', () => {
    const s = ")()())";
    const result = longestValidParentheses(s);
    expect(result).toBe(4);
  });

  it('longestValidParentheses should return 0 for s = ""', () => {
    const s = "";
    const result = longestValidParentheses(s);
    expect(result).toBe(0);
  });
});
