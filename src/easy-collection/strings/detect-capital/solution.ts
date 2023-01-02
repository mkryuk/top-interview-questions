export function detectCapitalUse(word: string): boolean {
  return isOnlyFirstCapital(word) || areAllCapital(word) || areAllLower(word);
}

function areAllLower(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (!isLower(charCode)) {
      return false;
    }
  }
  return true;
}

function areAllCapital(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (!isCapital(charCode)) {
      return false;
    }
  }
  return true;
}

function isOnlyFirstCapital(word: string): boolean {
  let charCode = word.charCodeAt(0);
  if (!isCapital(charCode)) {
    return false;
  }
  for (let i = 1; i < word.length; i++) {
    charCode = word.charCodeAt(i);
    if (!isLower(charCode)) {
      return false;
    }
  }
  return true;
}

function isLower(charCode: number): boolean {
  if (charCode < 97 || charCode > 122) {
    return false;
  }
  return true;
}

function isCapital(charCode: number): boolean {
  if (charCode < 65 || charCode > 90) {
    return false;
  }
  return true;
}
