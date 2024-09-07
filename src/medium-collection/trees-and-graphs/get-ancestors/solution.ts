export function getAncestors(n: number, edges: number[][]): number[][] {
  let revEdges = new Map<number, number[]>();
  for (const [from, to] of edges) {
    if (!revEdges.has(to)) {
      revEdges.set(to, []);
    }
    revEdges.get(to)!.push(from);
  }

  const result: number[][] = [];
  const ancestorsMap = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const ancestors = dfs(i, ancestorsMap, revEdges);
    result.push(ancestors);
  }
  return result;
}

function dfs(node: number, ancestorsMap: Map<number, number[]>, revEdges: Map<number, number[]>): number[] {
  if (ancestorsMap.has(node)) {
    return ancestorsMap.get(node)!;
  }

  const ancestorsSet = new Set<number>();
  for (const nextNode of revEdges.get(node) ?? []) {
    ancestorsSet.add(nextNode);
    const nextAncestors = dfs(nextNode, ancestorsMap, revEdges);
    nextAncestors.forEach((a) => ancestorsSet.add(a));
  }
  const ancestors = Array.from(ancestorsSet);
  ancestors.sort((a, b) => a - b);
  ancestorsMap.set(node, ancestors);
  return ancestors;
}
