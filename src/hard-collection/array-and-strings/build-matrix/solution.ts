export function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
  function topologicalSort(k: number, conditions: number[][]): number[] | null {
    const inDegree = new Array(k).fill(0);
    const graph = Array.from({ length: k }, () => [] as number[]);

    for (const [u, v] of conditions) {
      graph[u - 1].push(v - 1);
      inDegree[v - 1]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < k; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }

    const topoOrder = [];
    while (queue.length > 0) {
      const node = queue.shift()!;
      topoOrder.push(node);
      for (const neighbor of graph[node]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }

    return topoOrder.length === k ? topoOrder : null;
  }

  const rowOrder = topologicalSort(k, rowConditions);
  const colOrder = topologicalSort(k, colConditions);

  if (!rowOrder || !colOrder) {
    return [];
  }

  const position = new Array(k).fill(0).map(() => new Array(2).fill(0));

  for (let i = 0; i < k; i++) {
    position[rowOrder[i]][0] = i;
    position[colOrder[i]][1] = i;
  }

  const matrix = Array.from({ length: k }, () => new Array(k).fill(0));

  for (let i = 0; i < k; i++) {
    const [r, c] = position[i];
    matrix[r][c] = i + 1;
  }

  return matrix;
}
