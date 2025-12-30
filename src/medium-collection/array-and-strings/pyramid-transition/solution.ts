export function pyramidTransition(bottom: string, allowed: string[]): boolean {
  // build map: "AB" -> ["C", "D", ...]
  const nextByPair: Map<string, string[]> = new Map();

  for (const rule of allowed) {
    const pair = rule.slice(0, 2);
    const top = rule[2];

    let list = nextByPair.get(pair);
    if (!list) {
      list = [];
      nextByPair.set(pair, list);
    }
    list.push(top);
  }

  const memo: Map<string, boolean> = new Map();

  function canBuildRow(row: string): boolean {
    if (row.length === 1) {
      return true;
    }

    const cached = memo.get(row);
    if (cached !== undefined) {
      return cached;
    }

    // quick fail if any adjacent pair has no possible top
    for (let i = 0; i < row.length - 1; i++) {
      const pair = row[i] + row[i + 1];
      if (!nextByPair.has(pair)) {
        memo.set(row, false);
        return false;
      }
    }

    const candidatesByPos: string[][] = [];
    for (let i = 0; i < row.length - 1; i++) {
      const pair = row[i] + row[i + 1];
      candidatesByPos.push(nextByPair.get(pair)!);
    }

    function buildNext(pos: number, built: string[]): boolean {
      if (pos === candidatesByPos.length) {
        return canBuildRow(built.join(""));
      }

      const options = candidatesByPos[pos];
      for (const ch of options) {
        built.push(ch);

        if (buildNext(pos + 1, built)) {
          return true;
        }

        built.pop();
      }

      return false;
    }

    const result = buildNext(0, []);
    memo.set(row, result);
    return result;
  }

  return canBuildRow(bottom);
}
