export function longestBalanced(s: string): number {
  const n = s.length;
  let result = 0;

  // case 1: balanced substrings with exactly one distinct character
  let runLength = 0;
  let prev = "";
  for (let i = 0; i < n; i += 1) {
    const ch = s[i];
    if (ch === prev) {
      runLength += 1;
    } else {
      runLength = 1;
      prev = ch;
    }
    if (runLength > result) {
      result = runLength;
    }
  }

  const idx = (ch: string): number => {
    if (ch === "a") {
      return 0;
    }
    if (ch === "b") {
      return 1;
    }
    return 2;
  };

  // case 2: balanced substrings with exactly two distinct characters
  const pairs: Array<[number, number, number]> = [
    [0, 1, 2], // a and b, no c
    [0, 2, 1], // a and c, no b
    [1, 2, 0], // b and c, no a
  ];

  for (let p = 0; p < pairs.length; p += 1) {
    const [x, y, z] = pairs[p];
    let cx = 0;
    let cy = 0;
    let cz = 0;
    const first = new Map<string, number>();
    first.set("0#0", -1);

    for (let i = 0; i < n; i += 1) {
      const chIdx = idx(s[i]);
      if (chIdx === x) {
        cx += 1;
      } else if (chIdx === y) {
        cy += 1;
      } else if (chIdx === z) {
        cz += 1;
      }

      const diff = cx - cy;
      const key = `${diff}#${cz}`;
      const seen = first.get(key);
      if (seen !== undefined) {
        const len = i - seen;
        if (len > result) {
          result = len;
        }
      } else {
        first.set(key, i);
      }
    }
  }

  // case 3: balanced substrings with three distinct characters
  let ca = 0;
  let cb = 0;
  let cc = 0;
  const first3 = new Map<string, number>();
  first3.set("0#0", -1);

  for (let i = 0; i < n; i += 1) {
    const ch = s[i];
    if (ch === "a") {
      ca += 1;
    } else if (ch === "b") {
      cb += 1;
    } else {
      cc += 1;
    }

    const d1 = ca - cb;
    const d2 = ca - cc;
    const key = `${d1}#${d2}`;
    const seen = first3.get(key);
    if (seen !== undefined) {
      const len = i - seen;
      if (len > result) {
        result = len;
      }
    } else {
      first3.set(key, i);
    }
  }

  return result;
}
