export function pushDominoes(dominoes: string): string {
  const n = dominoes.length;
  let idx = 0;
  let result = dominoes.split("");
  let start = 0;

  while (idx < n) {
    let nextL = idx;

    if (dominoes[idx] === "R") {
      const firstR = idx;
      let lastR = idx;

      // looking for next 'L'
      while (nextL < n && dominoes[nextL] !== "L") {
        if (dominoes[nextL] === "R") {
          // update last 'R' index
          lastR = nextL;
        }
        nextL++;
      }

      // we found 'L'
      if (nextL < n) {
        const gap = nextL - lastR - 1;
        const mid = Math.floor(gap / 2);

        // we drop all to the right from the first 'L' to the mid
        for (let i = firstR; i <= lastR + mid; i++) {
          result[i] = "R";
        }
        // we drop all to the left from next 'L' to the mid
        for (let i = nextL - mid; i <= nextL; i++) {
          result[i] = "L";
        }
      } else {
        // we drop all from the first 'R' to the end
        for (let i = firstR; i < n; i++) {
          result[i] = "R";
        }
      }
      start = nextL + 1;
    } else if (dominoes[idx] === "L") {
      // we drop all from current 'L' to the start point
      for (let i = start; i < idx; i++) {
        result[i] = "L";
      }
      start = idx + 1;
    }
    idx = nextL + 1;
  }

  return result.join("");
}
