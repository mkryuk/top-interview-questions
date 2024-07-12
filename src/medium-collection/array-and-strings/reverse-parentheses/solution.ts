export function reverseParentheses(s: string): string {
  const stack: string[] = [];

  for (let char of s) {
    if (char === ")") {
      let temp: string[] = [];

      // pop characters until '(' is found
      while (stack.length && stack[stack.length - 1] !== "(") {
        temp.push(stack.pop()!);
      }

      // remove the '(' from the stack
      stack.pop();

      // push the reversed segment back onto the stack
      for (let reversedChar of temp) {
        stack.push(reversedChar);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
