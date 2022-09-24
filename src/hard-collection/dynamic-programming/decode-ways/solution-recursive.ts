export function numDecodings(s: string): number {
  const result = dfs(0, s, new Map());
  return result;
}

function dfs(index: number, s: string, map: Map<number, number>): number {
  if (map.has(index)) {
    return map.get(index)!;
  }
  if (index === s.length) {
    return 1;
  }
  if (s[index] === "0") {
    return 0;
  }
  if (index === s.length - 1) {
    return 1;
  }
  let result = dfs(index + 1, s, map);

  if (parseInt(s.substring(index, index + 2)) <= 26) {
    result += dfs(index + 2, s, map);
  }
  map.set(index, result);

  return result;
}
