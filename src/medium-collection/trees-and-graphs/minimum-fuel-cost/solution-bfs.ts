export function minimumFuelCost(roads: number[][], seats: number): number {
  const n: number = roads.length + 1;
  const tree: Map<number, number[]> = new Map();
  const degree: number[] = new Array(n).fill(0);

  for (const [from, to] of roads) {
    tree.set(from, (tree.get(from) || []).concat(to));
    tree.set(to, (tree.get(to) || []).concat(from));
    degree[from]++;
    degree[to]++;
  }

  return calculateFuel(n, tree, degree, seats);
}

function calculateFuel(n: number, adj: Map<number, number[]>, degree: number[], seats: number): number {
  const q: number[] = [];
  for (let i = 1; i < n; i++) {
    if (degree[i] === 1) {
      q.push(i);
    }
  }

  const representatives: number[] = new Array(n).fill(1);
  let fuel: number = 0;

  while (q.length > 0) {
    const node: number = q.shift() as number;
    fuel += Math.ceil(representatives[node] / seats);

    for (const neighbor of adj.get(node) || []) {
      degree[neighbor]--;
      representatives[neighbor] += representatives[node];
      if (degree[neighbor] === 1 && neighbor !== 0) {
        q.push(neighbor);
      }
    }
  }
  return fuel;
}
