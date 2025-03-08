export function minimumRecolors(blocks: string, k: number): number {
  let whiteCount = 0;
  let result = Infinity;
  const n = blocks.length;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") {
      whiteCount++;
    }
  }
  result = whiteCount;
  for (let i = k; i < n; i++) {
    if (blocks[i - k] === "W") {
      whiteCount--;
    }
    if (blocks[i] === "W") {
      whiteCount++;
    }
    result = Math.min(result, whiteCount);
  }
  return result;
}
