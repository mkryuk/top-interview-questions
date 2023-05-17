export function ambiguousCoordinates(s: string): string[] {
  let result: string[] = [];
  let str = s.substring(1, s.length - 1); // Remove brackets

  for (let i = 1; i < str.length; i++) {
    let left = str.substring(0, i);
    let right = str.substring(i);

    let leftCombinations = dotCombinations(left);
    let rightCombinations = dotCombinations(right);

    for (let l of leftCombinations) {
      for (let r of rightCombinations) {
        result.push(`(${l}, ${r})`);
      }
    }
  }

  return result;
}

function dotCombinations(s: string): string[] {
  let result: string[] = [];
  if (isValidInteger(s)) {
    result.push(s); // Push s if it is valid without decimal point
  }
  if (s !== "0") {
    // Do not insert decimal point when s is '0'
    for (let i = 1; i < s.length; i++) {
      let integerPart = s.substring(0, i);
      let decimalPart = s.substring(i);
      if (isValidInteger(integerPart) && isValidDecimal(decimalPart)) {
        result.push(integerPart + "." + decimalPart);
      }
    }
  }

  return result;
}

function isValidInteger(s: string): boolean {
  return !(s.length > 1 && s[0] === "0");
}

function isValidDecimal(s: string): boolean {
  return !(s[s.length - 1] === "0");
}
