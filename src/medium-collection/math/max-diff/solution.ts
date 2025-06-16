export function maxDiff(num: number): number {
  const str = num.toString();
  // find first not 9 and change it with 9
  let firstNotNine = "";
  let max: string[] = [];
  for (const num of str) {
    if (firstNotNine === "" && num !== "9") {
      firstNotNine = num;
    }
    if (num === firstNotNine) {
      max.push("9");
    } else {
      max.push(num);
    }
  }
  // if first if not 1 change it with 1
  // otherwise change next num > 1 to 0
  let min: string[] = [];
  let replaceFirst = str[0] !== "1" ? true : false;
  let numToReplace = replaceFirst ? str[0] : "";
  for (let i = 0; i < str.length; i++) {
    if (replaceFirst && str[i] === str[0]) {
      min.push("1");
      continue;
    }
    if (numToReplace === "" && str[i] > "1") {
      numToReplace = str[i];
    }
    if (numToReplace === str[i]) {
      min.push("0");
      continue;
    }
    min.push(str[i]);
  }
  const maxNum = parseInt(max.join(""), 10);
  const minNum = parseInt(min.join(""), 10);
  const result = maxNum - minNum;
  return result;
}
