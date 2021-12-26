export function isValid(s: string): boolean {
  let stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }
    const top = stack[stack.length - 1];
    switch (top) {
      case "{":
        if (s[i] === "}") {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
      case "[":
        if (s[i] === "]") {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
      case "(":
        if (s[i] === ")") {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
    }
  }
  return stack.length == 0;
}
