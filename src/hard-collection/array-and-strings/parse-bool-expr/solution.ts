export function parseBoolExpr(expression: string): boolean {
  const stack: string[] = [];

  for (let c of expression) {
    if (c === ",") {
      continue;
    } else if (c === "t" || c === "f" || c === "&" || c === "|" || c === "!" || c === "(") {
      stack.push(c);
    } else if (c === ")") {
      const operands: string[] = [];
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        operands.push(stack.pop()!);
      }
      // pop the '('
      stack.pop();
      // the operator is before '('
      const op = stack.pop()!;
      const result = evaluate(op, operands);
      stack.push(result);
    }
  }

  return stack.pop() === "t";
}

function evaluate(op: string, operands: string[]): string {
  if (op === "!") {
    // operands should have length 1
    const operand = operands[0];
    return operand === "t" ? "f" : "t";
  } else if (op === "&") {
    // return 't' if all operands are 't'
    for (let operand of operands) {
      if (operand === "f") {
        return "f";
      }
    }
    return "t";
  } else if (op === "|") {
    // return 't' if any operand is 't'
    for (let operand of operands) {
      if (operand === "t") {
        return "t";
      }
    }
    return "f";
  }
  throw new Error(`Invalid operator: ${op}`);
}
