export function removeInvalidParentheses(s: string): string[] {
  // we calculate number of left and right parenthesis to remove
  let [left, right] = parenthesisToRemove(s);
  // store path that we already checked
  let checkedPath = new Set<string>();
  let result: string[] = [];
  dfs(left, right, s, result, checkedPath);
  return result;
}

function dfs(left: number, right: number, s: string, result: string[], checked: Set<string>): void {
  checked.add(s);
  // if we already removed required number of left and right parenthesis
  // this can be a right solution, so we check it
  if (left === 0 && right === 0) {
    if (isValid(s)) {
      result.push(s);
    }
    return;
  }
  for (let i = 0; i < s.length; i++) {
    if (left > 0 && s[i] === "(") {
      // remove one left "(" to check
      const temp = s.slice(0, i) + s.slice(i + 1);
      if (!checked.has(temp)) {
        dfs(left - 1, right, temp, result, checked);
      }
    }
    if (right > 0 && s[i] === ")") {
      // remove one right ")" to check
      const temp = s.slice(0, i) + s.slice(i + 1);
      if (!checked.has(temp)) {
        dfs(left, right - 1, temp, result, checked);
      }
    }
  }
}

// calculate number of left and right parenthesis to remove
function parenthesisToRemove(s: string): [left: number, right: number] {
  let left = 0;
  let right = 0;
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
      stack.push("(");
    }
    if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        left--;
        stack.pop();
      } else {
        right++;
        stack.push(")");
      }
    }
  }
  return [left, right];
}

// check if this is valid parenthesis combination
function isValid(s: string): boolean {
  const parenthesis = ["(", ")"];
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    // if this is the closing parenthesis
    if (s[i] === ")") {
      let top = stack.pop();
      if (top !== "(") {
        return false;
      }
    } else if (s[i] === "(") {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
