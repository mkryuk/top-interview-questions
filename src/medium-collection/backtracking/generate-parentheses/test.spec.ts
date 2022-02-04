import { generateParenthesis } from "./solution";

it("generateParenthesis should return correct result for n = 1", () => {
  const n = 1;
  const parenthesis = generateParenthesis(n);
  expect(parenthesis).toEqual(["()"]);
});

it("generateParenthesis should return correct result for n = 2", () => {
  const n = 2;
  const parenthesis = generateParenthesis(n);
  let expectedResult = ["(())", "()()"];
  expectedResult.forEach((item) => {
    const result = parenthesis.includes(item);
    expect(result).toBeTrue();
  });
});

it("generateParenthesis should return correct result for n = 3", () => {
  const n = 3;
  const parenthesis = generateParenthesis(n);
  let expectedResult = ["((()))", "(())()", "()(())", "(()())", "()()()"];
  expectedResult.forEach((item) => {
    const result = parenthesis.includes(item);
    expect(result).toBeTrue();
  });
});

it("generateParenthesis should return correct result for n = 4", () => {
  const n = 4;
  const parenthesis = generateParenthesis(n);
  let expectedResult = [
    "(((())))",
    "((()()))",
    "((())())",
    "((()))()",
    "(()(()))",
    "(()()())",
    "(()())()",
    "(())(())",
    "(())()()",
    "()((()))",
    "()(()())",
    "()(())()",
    "()()(())",
    "()()()()",
  ];
  expectedResult.forEach((item) => {
    const result = parenthesis.includes(item);
    expect(result).toBeTrue();
  });
});
