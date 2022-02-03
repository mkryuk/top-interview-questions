import { generateParenthesis } from "./solution";

it('generateParenthesis should return ["((()))","(()())","(())()","()(())","()()()"] for n = 3', () => {
  const n = 3;
  const result = generateParenthesis(n);
  expect(result).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
});

it('generateParenthesis should return ["()"] for n = 1', () => {
  const n = 1;
  const result = generateParenthesis(n);
  expect(result).toEqual(["()"]);
});
