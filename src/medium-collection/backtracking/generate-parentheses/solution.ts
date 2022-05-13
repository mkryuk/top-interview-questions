export function generateParenthesis(n: number): string[] {
  let result: string[] = [];
  backtrack("", n, 0, 0, result);
  return result;
}

function backtrack(
  parenthesis: string,
  n: number,
  open: number,
  close: number,
  result: string[],
) {
  if (parenthesis.length === n * 2) {
    result.push(parenthesis);
    return;
  }
  if (open < n) {
    backtrack(parenthesis + "(", n, open + 1, close, result);
  }
  if (close < open) {
    backtrack(parenthesis + ")", n, open, close + 1, result);
  }
}
