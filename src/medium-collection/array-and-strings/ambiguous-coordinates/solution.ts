export function ambiguousCoordinates(s: string): string[] {
  let result: string[] = [];
  let str = s.substring(1, s.length - 1); // Remove brackets

  for (let i = 1; i < str.length; i++) {
    let left = str.substring(0, i);
    let right = str.substring(i);

    let leftCombinations = insertDecimal(left);
    let rightCombinations = insertDecimal(right);

    for (let l of leftCombinations) {
      for (let r of rightCombinations) {
        result.push(`(${l}, ${r})`);
      }
    }
  }

  return result;
}

function insertDecimal(s: string): string[] {
  let result: string[] = [];
  if (isValid(s, true)) {
    result.push(s); // Push s if it is valid without decimal point
  }
  if (s !== "0") {
    // Do not insert decimal point when s is '0'
    for (let i = 1; i < s.length; i++) {
      let integerPart = s.substring(0, i);
      let decimalPart = s.substring(i);
      if (isValid(integerPart, true) && isValid(decimalPart, false)) {
        result.push(integerPart + "." + decimalPart);
      }
    }
  }

  return result;
}

function isValid(s: string, isIntegerPart: boolean): boolean {
  if (isIntegerPart && s.length > 1 && s[0] === "0") {
    return false;
  } else if (!isIntegerPart && s[s.length - 1] === "0") {
    return false;
  }

  return true;
}
