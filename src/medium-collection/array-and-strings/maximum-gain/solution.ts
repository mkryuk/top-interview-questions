export function maximumGain(s: string, x: number, y: number): number {
  let result = 0;
  if (x > y) {
    let tempResult = 0;
    [s, tempResult] = removePairs(s, "a", "b", x);
    result += tempResult;
    [s, tempResult] = removePairs(s, "b", "a", y);
    result += tempResult;
  } else {
    let tempResult = 0;
    [s, tempResult] = removePairs(s, "b", "a", y);
    result += tempResult;
    [s, tempResult] = removePairs(s, "a", "b", x);
    result += tempResult;
  }
  return result;
}

function removePairs(
  s: string,
  first: string,
  second: string,
  points: number,
): [s: string, score: number] {
  const stack: string[] = [];
  let score = 0;
  for (const char of s) {
    if (
      stack.length > 0 &&
      stack[stack.length - 1] === first &&
      char === second
    ) {
      stack.pop();
      score += points;
    } else {
      stack.push(char);
    }
  }
  return [stack.join(""), score];
}
