export function myAtoi(s: string): number {
  let sign: string = "";
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && !sign.length) {
      continue;
    }
    if (sign.length === 0) {
      if (s[i] === "-" || s[i] === "+") {
        sign = s[i];
        continue;
      }
      sign = "+";
    }
    if (
      s.charCodeAt(i) >= "0".charCodeAt(0) &&
      s.charCodeAt(i) <= "9".charCodeAt(0)
    ) {
      if (result === 0) {
        result = parseInt(s[i]);
        continue;
      }
      result = result * 10 + parseInt(s[i]);
    } else {
      break;
    }
  }
  result = sign === "-" ? result * -1 : result;
  if (result > 2147483647) {
    result = 2147483647;
  }
  if (result < -2147483648) {
    result = -2147483648;
  }
  return result;
}
