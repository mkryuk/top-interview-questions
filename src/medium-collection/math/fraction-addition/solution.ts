export function fractionAddition(expression: string): string {
  const fractions = expression.match(/[+-]?\d+\/\d+/g) || [];
  let numerator = 0;
  let denominator = 1;
  for (const fraction of fractions) {
    const [num, denom] = fraction.split("/").map(Number);
    numerator = num * denominator + numerator * denom;
    denominator = denom * denominator;
    const gcd = getGCD(Math.abs(numerator), denominator);
    numerator /= gcd;
    denominator /= gcd;
  }

  if (numerator === 0) {
    return "0/1";
  }

  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }

  return `${numerator}/${denominator}`;
}

function getGCD(a: number, b: number): number {
  return b === 0 ? a : getGCD(b, a % b);
}
