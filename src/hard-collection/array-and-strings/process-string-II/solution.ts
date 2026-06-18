export function processStr(s: string, k: number): string {
  const lengths: number[] = [];

  let length = 0;

  for (const ch of s) {
    if (isLowercaseLetter(ch)) {
      length += 1;
    } else if (ch === "*") {
      if (length > 0) {
        length -= 1;
      }
    } else if (ch === "#") {
      length *= 2;
    }

    lengths.push(length);
  }

  if (k >= length) {
    return ".";
  }

  let index = k;

  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    const beforeLength = i === 0 ? 0 : lengths[i - 1];

    if (isLowercaseLetter(ch)) {
      // this letter was appended at position beforeLength
      if (index === beforeLength) {
        return ch;
      }
      // otherwise the target was already in the previous string
    } else if (ch === "*") {
      // delete only removed the last character, so existing indexes stay the same
    } else if (ch === "#") {
      // duplicated string: second half maps back to first half
      if (index >= beforeLength) {
        index -= beforeLength;
      }
    } else if (ch === "%") {
      // reverse maps index to the mirrored position
      index = beforeLength - 1 - index;
    }
  }

  return ".";
}

function isLowercaseLetter(ch: string): boolean {
  return ch >= "a" && ch <= "z";
}
