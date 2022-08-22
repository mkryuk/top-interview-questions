import { removeInvalidParentheses } from "./solution";

it('removeInvalidParentheses should return ["(())()","()()()"] for s = "()())()"', () => {
  const s = "()())()";
  const result = removeInvalidParentheses(s);
  const expected = ["(())()", "()()()"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["(a())()","(a)()()"] for s = "(a)())()"', () => {
  const s = "(a)())()";
  const result = removeInvalidParentheses(s);
  const expected = ["(a())()", "(a)()()"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return [""] for s = ")("', () => {
  const s = ")(";
  const result = removeInvalidParentheses(s);
  const expected = [""];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["()"] for s = "())"', () => {
  const s = "())";
  const result = removeInvalidParentheses(s);
  const expected = ["()"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["()"] for s = "(()"', () => {
  const s = "(()";
  const result = removeInvalidParentheses(s);
  const expected = ["()"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["()()"] for s = "()))((()"', () => {
  const s = "()))((()";
  const result = removeInvalidParentheses(s);
  const expected = ["()()"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["n"] for s = "n"', () => {
  const s = "n";
  const result = removeInvalidParentheses(s);
  const expected = ["n"];
  expect(result).toEqual(expected);
});

it('removeInvalidParentheses should return ["()((b))"] for s = "())((((((((((b))("', () => {
  const s = "())((((((((((b))(";
  const result = removeInvalidParentheses(s);
  const expected = ["()((b))"];
  expect(result).toEqual(expected);
});
