export function minDeletionSize(strs: string[]): number {
  const rows = strs.length;
  const cols = strs[0].length;

  const fixed: boolean[] = new Array<boolean>(Math.max(0, rows - 1)).fill(false);
  let remaining = fixed.length; // how many pairs are not fixed yet
  let result = 0;

  for (let col = 0; col < cols; col++) {
    if (remaining === 0) {
      break;
    }

    const toFix: number[] = [];
    let mustDelete = false;

    // single scan over pairs for this column
    for (let row = 0; row < fixed.length; row++) {
      if (fixed[row]) {
        continue;
      }

      const a = strs[row][col];
      const b = strs[row + 1][col];

      if (a > b) {
        mustDelete = true;
        break;
      }
      if (a < b) {
        toFix.push(row);
      }
    }

    if (mustDelete) {
      result++;
      continue;
    }

    // apply only collected fixes (not a full second pass)
    for (let k = 0; k < toFix.length; k++) {
      const idx = toFix[k];
      if (!fixed[idx]) {
        fixed[idx] = true;
        remaining--;
      }
    }
  }

  return result;
}
