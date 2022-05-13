export function fractionToDecimal(
  numerator: number,
  denominator: number,
): string {
  if (numerator == 0) {
    return "0";
  }
  let fraction: string = "";
  // If either one is negative (not both)
  if (numerator < 0 !== denominator < 0) {
    fraction += "-";
  }
  // Convert to Long or else abs(-2147483648) overflows
  let dividend = Math.abs(numerator);
  let divisor = Math.abs(denominator);
  fraction += Math.trunc(dividend / divisor);
  let remainder = dividend % divisor;
  if (remainder == 0) {
    return fraction.toString();
  }
  fraction += ".";
  let map = new Map();
  while (remainder !== 0) {
    if (map.has(remainder)) {
      fraction = insertString(fraction, "(", map.get(remainder));
      fraction += ")";
      break;
    }
    map.set(remainder, fraction.length);
    remainder *= 10;
    fraction += Math.trunc(remainder / divisor);
    remainder %= divisor;
  }
  return fraction.toString();
}

function insertString(str: string, subStr: string, position: number): string {
  return str.substring(0, position) + subStr + str.substring(position);
}
