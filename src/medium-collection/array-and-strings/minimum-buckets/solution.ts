export function minimumBuckets(hamsters: string): number {
  const h: string[] = hamsters.split("");
  for (let i = 0; i < h.length; i++) {
    if (h[i] === "H") {
      if (i - 1 >= 0 && h[i - 1] === "F") {
        continue;
      }

      if (i + 1 < h.length && h[i + 1] === ".") {
        h[i + 1] = "F";
      } else if (i - 1 >= 0 && h[i - 1] === ".") {
        h[i - 1] = "F";
      } else return -1;
    }
  }
  let count = 0;
  for (let i = 0; i < h.length; i++) {
    if (h[i] === "F") count++;
  }
  return count;
}
