export function maximizeSquareArea(m: number, n: number, hFences: number[], vFences: number[]): number {
  const mod: bigint = BigInt(1e9 + 7);

  const hs: number[] = buildSortedLines(m, hFences);
  const vs: number[] = buildSortedLines(n, vFences);

  const hDiffs: Set<number> = buildDiffSet(hs);

  let best: number = 0;

  for (let i: number = 0; i < vs.length; i += 1) {
    for (let j: number = i + 1; j < vs.length; j += 1) {
      const d: number = vs[j] - vs[i];

      if (hDiffs.has(d)) {
        if (d > best) {
          best = d;
        }
      }
    }
  }

  if (best === 0) {
    return -1;
  }

  const side: bigint = BigInt(best);
  const result: bigint = (side * side) % mod;

  return Number(result);
}

function buildSortedLines(limit: number, fences: number[]): number[] {
  const lines: number[] = [];

  lines.push(1);
  lines.push(limit);

  for (let i: number = 0; i < fences.length; i += 1) {
    lines.push(fences[i]);
  }

  lines.sort((a: number, b: number) => a - b);

  return lines;
}

function buildDiffSet(lines: number[]): Set<number> {
  const diffs: Set<number> = new Set<number>();

  for (let i: number = 0; i < lines.length; i += 1) {
    for (let j: number = i + 1; j < lines.length; j += 1) {
      diffs.add(lines[j] - lines[i]);
    }
  }

  return diffs;
}
``;
