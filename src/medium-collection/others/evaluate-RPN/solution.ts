export function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isOperator(tokens[i])) {
      let [right, left] = [stack.pop(), stack.pop()];
      if (left === undefined || right === undefined) {
        throw "Stack is empty";
      }
      stack.push(Math.trunc(operate(left, right, tokens[i])));
    } else {
      stack.push(parseInt(tokens[i], 10));
    }
  }
  return stack.pop() ?? 0;
}

function isOperator(token: string) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

function operate(a: number, b: number, op: string): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
  throw "Unsupported operation";
}
