export function maximumOddBinaryNumber(s: string): string {
  const onesCount = s.split("").filter((char) => char === "1").length;
  let result = "1".repeat(onesCount - 1) + "0".repeat(s.length - onesCount) + "1";
  return result;
}
