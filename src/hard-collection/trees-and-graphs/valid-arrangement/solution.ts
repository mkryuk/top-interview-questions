export function validArrangement(pairs: number[][]): number[][] {
  const nodeMap = new Map<number, { to: number; index: number }[]>();
  const degree = new Map<number, number>();
  for (let i = 0; i < pairs.length; i++) {
    const [from, to] = pairs[i];
    if (!nodeMap.has(from)) {
      nodeMap.set(from, []);
    }
    nodeMap.get(from)!.push({ to, index: i });
    degree.set(from, (degree.get(from) ?? 0) + 1);
    degree.set(to, (degree.get(to) ?? 0) - 1);
  }

  let startNode: number | undefined = undefined;
  for (const [node, deg] of degree.entries()) {
    if (deg === 1) {
      startNode = node;
      break;
    }
  }

  if (startNode === undefined) {
    startNode = pairs[0][0];
  }

  let path: number[] = [];

  dfs(startNode, nodeMap, path);

  path.reverse();

  const result: number[][] = [];
  for (const index of path) {
    result.push(pairs[index]);
  }

  return result;
}

function dfs(node: number, nodeMap: Map<number, { to: number; index: number }[]>, path: number[]) {
  let neighbors = nodeMap.get(node);
  while (neighbors && neighbors.length > 0) {
    const { to, index } = neighbors.pop()!;
    dfs(to, nodeMap, path);
    path.push(index);
  }
}
