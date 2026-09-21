export function reverseDegree(s: string): number {
  let result = 0;
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    const alphabetPosition = s.charCodeAt(i) - aCode + 1;
    const reversedPosition = 27 - alphabetPosition;
    const stringPosition = i + 1;
    result += reversedPosition * stringPosition;
  }

  return result;
}
