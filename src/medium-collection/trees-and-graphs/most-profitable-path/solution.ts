export function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
  const n = amount.length;
  let graph: number[][] = Array.from({ length: n }, () => new Array());
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // BFS from node 0 to determine parent pointers.
  const parent = new Array(n).fill(-1);
  const visited = new Array(n).fill(false);
  const queue = [0];
  visited[0] = true;
  let i = 0;
  while (i < queue.length) {
    const curr = queue[i++];
    for (const neighbor of graph[curr]) {
      if (visited[neighbor]) {
        continue;
      }
      visited[neighbor] = true;
      parent[neighbor] = curr;
      queue.push(neighbor);
    }
  }

  // compute Bob's unique path from bob to 0.
  // for nodes not in Bob's path, bobTime remains Infinity.
  const bobTime = new Array(n).fill(Infinity);
  let t = 0;
  let curr = bob;
  while (curr !== -1) {
    bobTime[curr] = t;
    t++;
    curr = parent[curr];
  }

  // DFS for Alice to maximize her profit.
  let maxProfit = -Infinity;

  function dfsAlice(node: number, parent: number, time: number, income: number): void {
    let newIncome = income;
    if (time < bobTime[node]) {
      newIncome += amount[node];
    } else if (time === bobTime[node]) {
      newIncome += amount[node] / 2;
    }

    // if it's a leaf node (and not the root), update maxProfit
    if (node !== 0 && graph[node].length === 1) {
      maxProfit = Math.max(newIncome, maxProfit);
      return;
    }

    // continue DFS
    for (const neighbor of graph[node]) {
      if (neighbor === parent) {
        continue;
      }
      dfsAlice(neighbor, node, time + 1, newIncome);
    }
  }
  dfsAlice(0, -1, 0, 0);

  return maxProfit;
}
