import { removeOuterParentheses } from "./solution";

describe("1021. Remove Outermost Parentheses:", () => {
  it('removeOuterParentheses should return "()()()" for s = "(()())(())"', () => {
    const s = "(()())(())";
    const result = removeOuterParentheses(s);
    expect(result).toEqual("()()()");
  });

  it('removeOuterParentheses should return "()()()()(())" for s = "(()())(())(()(()))"', () => {
    const s = "(()())(())(()(()))";
    const result = removeOuterParentheses(s);
    expect(result).toEqual("()()()()(())");
  });

  it('removeOuterParentheses should return "" for s = "()()"', () => {
    const s = "()()";
    const result = removeOuterParentheses(s);
    expect(result).toEqual("");
  });
});
