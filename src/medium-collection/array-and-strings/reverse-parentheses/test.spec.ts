import { reverseParentheses } from "./solution";

describe("Reverse Substrings Between Each Pair of Parentheses", () => {
  it('reverseParentheses should return "dcba" for s = "(abcd)"', () => {
    const s = "(abcd)";
    const result = reverseParentheses(s);
    expect(result).toEqual("dcba");
  });

  it('reverseParentheses should return "iloveu" for s = "(u(love)i)"', () => {
    const s = "(u(love)i)";
    const result = reverseParentheses(s);
    expect(result).toEqual("iloveu");
  });

  it('reverseParentheses should return "leetcode" for s = "(ed(et(oc))el)"', () => {
    const s = "(ed(et(oc))el)";
    const result = reverseParentheses(s);
    expect(result).toEqual("leetcode");
  });
});
