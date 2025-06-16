export function minMaxDifference(num: number): number {
  const numStr = num.toString();
  const max: string[] = [];
  let remap: string = "";
  const firstNum = numStr[0];
  const min: string[] = [];
  for (const ch of numStr) {
    // find first not 9 and remap with 9
    if (remap === "" && ch !== "9") {
      remap = ch;
    }
    if (ch === remap) {
      max.push("9");
    } else {
      max.push(ch);
    }
    // remap all occurrences of the first digit with 0
    if (ch === firstNum) {
      min.push("0");
    } else {
      min.push(ch);
    }
  }
  const maxNum = parseInt(max.join(""), 10);
  const minNum = parseInt(min.join(""), 10);
  const result = maxNum - minNum;
  return result;
}
