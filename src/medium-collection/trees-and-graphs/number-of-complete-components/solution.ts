export function countCompleteComponents(n: number, edges: number[][]): number {
  const graph = new Map<number, number[]>();
  for (const [from, to] of edges) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    if (!graph.has(to)) {
      graph.set(to, []);
    }
    graph.get(from)!.push(to);
    graph.get(to)!.push(from);
  }

  let result = 0;
  const visited = new Set();
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) {
      continue;
    }
    const componentNodes = getComponentNodes(i, graph);
    let completeComponent = true;
    for (let j = 0; j < componentNodes.length; j++) {
      const node = componentNodes[j];
      visited.add(node);
      if ((graph.get(node) ?? []).length !== componentNodes.length - 1) {
        completeComponent = false;
      }
    }
    if (completeComponent) {
      result++;
    }
  }
  return result;
}

function getComponentNodes(node: number, graph: Map<number, number[]>): number[] {
  const visited = new Set<number>();
  const nodes = [];
  const stack = [node];
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    nodes.push(node);
    stack.push(...(graph.get(node) ?? []));
  }
  return nodes;
}
