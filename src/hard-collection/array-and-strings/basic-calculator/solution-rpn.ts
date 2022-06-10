export function calculate(s: string): number {
  let rpnStack = infixToRPN(s);
  return calculateRPN(rpnStack);
}

function infixToRPN(s: string): string[] {
  let rpnStack: string[] = [];
  let opStack: string[] = [];
  let isPrevDigit = false;
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      // if previous char was digit.
      // multiply by 10 and add current digit
      if (isPrevDigit) {
        let prev = parseInt(rpnStack.pop()!, 10);
        prev *= 10;
        prev += parseInt(s[i], 10);
        rpnStack.push(`${prev}`);
      } else {
        rpnStack.push(s[i]);
      }
      isPrevDigit = true;
    } else if (isOperator(s[i])) {
      let lastOpIndex = opStack.length - 1;
      while (
        lastOpIndex >= 0 &&
        // if current operator is lower precedence than operator on top of stack
        operators.get(s[i])! <= operators.get(opStack[lastOpIndex])!
      ) {
        rpnStack.push(opStack.pop()!);
        lastOpIndex--;
      }
      opStack.push(s[i]);
      isPrevDigit = false;
    } else {
      isPrevDigit = false;
    }
  }
  // pop all operators from stack
  while (opStack.length) {
    rpnStack.push(opStack.pop()!);
  }
  return rpnStack;
}

function calculateRPN(s: string[]): number {
  let stack: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (isOperator(s[i])) {
      let op = s[i];
      let [right, left] = [stack.pop()!, stack.pop()!];
      switch (op) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "*":
          stack.push(left * right);
          break;
        case "/":
          stack.push(Math.trunc(left / right));
          break;
      }
    } else {
      stack.push(parseInt(s[i], 10));
    }
  }
  return stack.pop()!;
}

let operators = new Map<string, number>(
  [
    { operator: "+", priority: 0 },
    { operator: "-", priority: 1 },
    { operator: "*", priority: 2 },
    { operator: "/", priority: 2 },
  ].map((i) => [i.operator, i.priority]),
);

function isDigit(s: string): boolean {
  return s !== " " && !isOperator(s);
}

function isOperator(s: string): boolean {
  return operators.has(s);
}
