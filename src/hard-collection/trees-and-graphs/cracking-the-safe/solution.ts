export function crackSafe(n: number, k: number): string {
  if (n === 1 && k === 1) {
    return "0";
  }
  const visited = new Set<string>();
  let sequences: string[] = [];
  // fill prefix with "000" in case n = 4
  const prefix = "0".repeat(n - 1);
  dfs(prefix, sequences, visited, k);
  sequences.push(prefix);
  return sequences.join("");
}

function dfs(
  prefix: string,
  sequences: string[],
  visited: Set<string>,
  k: number,
): void {
  for (let i = 0; i < k; i++) {
    const sequence = prefix + i;
    if (visited.has(sequence)) {
      continue;
    }
    visited.add(sequence);
    // in case of sequence "0001"
    // we go deeper with prefix "001"
    dfs(sequence.slice(1), sequences, visited, k);
    sequences.push(i.toString());
  }
}
