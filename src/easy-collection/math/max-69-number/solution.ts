export function maximum69Number(num: number): number {
  const digits = num.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === "6") {
      digits[i] = "9";
      break;
    }
  }
  const result = parseInt(digits.join(""), 10);
  return result;
}
