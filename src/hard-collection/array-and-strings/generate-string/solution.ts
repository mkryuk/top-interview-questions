export function generateString(str1: string, str2: string): string {
  const n = str1.length;
  const m = str2.length;
  const totalLength = n + m - 1;
  const result = new Array<string>(totalLength).fill("a");
  const forced = new Array<boolean>(totalLength).fill(false);
  const blocked = new Array<boolean>(totalLength).fill(false);

  // force every required match window into the answer.
  for (let start = 0; start < n; start++) {
    if (str1[start] !== "T") {
      continue;
    }

    for (let offset = 0; offset < m; offset++) {
      const index = start + offset;
      const char = str2[offset];

      if (forced[index] && result[index] !== char) {
        return "";
      }

      result[index] = char;
      forced[index] = true;
    }
  }

  // for each forbidden window, add the latest possible mismatch to keep the word lexicographically small.
  for (let start = 0; start < n; start++) {
    if (str1[start] !== "F") {
      continue;
    }

    let alreadyDifferent = false;
    let hasFreeMismatchWithA = false;
    let rightmostFreeIndex = -1;

    for (let offset = 0; offset < m; offset++) {
      const index = start + offset;
      const target = str2[offset];

      if (forced[index]) {
        if (result[index] !== target) {
          alreadyDifferent = true;
          break;
        }

        continue;
      }

      if (target !== "a") {
        hasFreeMismatchWithA = true;
      }

      rightmostFreeIndex = index;
    }

    if (alreadyDifferent || hasFreeMismatchWithA) {
      continue;
    }

    let alreadyBlocked = false;

    for (let offset = 0; offset < m; offset++) {
      const index = start + offset;

      if (blocked[index]) {
        alreadyBlocked = true;
        break;
      }
    }

    if (alreadyBlocked) {
      continue;
    }

    if (rightmostFreeIndex === -1) {
      return "";
    }

    // one blocked position can invalidate many overlapping forbidden windows.
    blocked[rightmostFreeIndex] = true;
    result[rightmostFreeIndex] = "b";
  }

  return result.join("");
}
