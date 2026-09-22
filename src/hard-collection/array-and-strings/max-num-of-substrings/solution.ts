export function maxNumOfSubstrings(s: string): string[] {
  const first: number[] = new Array(26).fill(-1);
  const last: number[] = new Array(26).fill(-1);

  buildRanges(s, first, last);
  const result: string[] = [];
  let previousEnd = -1;

  for (let i = 0; i < s.length; i++) {
    const charIndex = getCharIndex(s[i]);

    // a minimal valid interval can only start
    // at the first occurrence of a character
    if (first[charIndex] !== i) {
      continue;
    }

    const end = findValidEnd(s, i, first, last);

    if (end === -1) {
      continue;
    }

    // intervals are considered by increasing start position.
    // if this one does not overlap, take it.
    if (i > previousEnd) {
      result.push(s.substring(i, end + 1));

      previousEnd = end;
    } else if (end < previousEnd) {
      // this interval is contained inside the previously selected one.
      // replacing it keeps the same count but reduces total length.
      result[result.length - 1] = s.substring(i, end + 1);

      previousEnd = end;
    }
  }

  return result;
}

function buildRanges(s: string, first: number[], last: number[]): void {
  for (let i = 0; i < s.length; i++) {
    const charIndex = getCharIndex(s[i]);
    if (first[charIndex] === -1) {
      first[charIndex] = i;
    }

    last[charIndex] = i;
  }
}

function findValidEnd(s: string, start: number, first: number[], last: number[]): number {
  const startChar = getCharIndex(s[start]);
  let end = last[startChar];
  for (let i = start; i <= end; i++) {
    const charIndex = getCharIndex(s[i]);

    // this character also occurs before our substring,
    // so the substring cannot be valid
    if (first[charIndex] < start) {
      return -1;
    }

    // all occurrences of this character must be included
    end = Math.max(end, last[charIndex]);
  }

  return end;
}

function getCharIndex(char: string): number {
  return char.charCodeAt(0) - 97;
}
