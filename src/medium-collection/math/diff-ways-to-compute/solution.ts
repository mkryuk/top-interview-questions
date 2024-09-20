export function diffWaysToCompute(expression: string): number[] {
  // if the expression is just a number, return it as the result
  if (!expression.includes("+") && !expression.includes("-") && !expression.includes("*")) {
    return [parseInt(expression)];
  }

  const results: number[] = [];

  // loop through the expression to find operators
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // when we find an operator, split the expression into left and right parts
    if (char === "+" || char === "-" || char === "*") {
      const left = diffWaysToCompute(expression.substring(0, i));
      const right = diffWaysToCompute(expression.substring(i + 1));

      // combine the results of left and right sub-expressions based on the operator
      const combined = compute(left, right, char);
      results.push(...combined);
    }
  }

  return results;
}

// helper function to compute based on the operator
function compute(left: number[], right: number[], operator: string): number[] {
  const result: number[] = [];
  for (let l of left) {
    for (let r of right) {
      if (operator === "+") {
        result.push(l + r);
      } else if (operator === "-") {
        result.push(l - r);
      } else if (operator === "*") {
        result.push(l * r);
      }
    }
  }
  return result;
}
