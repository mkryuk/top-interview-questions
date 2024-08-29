export function removeStones(stones: number[][]): number {
  const n = stones.length;
  const adjacencyList: number[][] = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
        adjacencyList[i].push(j);
        adjacencyList[j].push(i);
      }
    }
  }
  let numberOfComponents = 0;
  const visited = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      numberOfComponents++;
      dfs(i, adjacencyList, visited);
    }
  }
  return n - numberOfComponents;
}

function dfs(stone: number, adjacencyList: number[][], visited: Set<number>) {
  if (visited.has(stone)) {
    return;
  }
  visited.add(stone);
  for (const neighbor of adjacencyList[stone]) {
    dfs(neighbor, adjacencyList, visited);
  }
}
