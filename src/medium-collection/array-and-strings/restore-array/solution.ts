export function restoreArray(adjacentPairs: number[][]): number[] {
  let adjacencyList = new Map<number, number[]>();
  adjacentPairs.forEach(([left, right]) => {
    if (!adjacencyList.has(left)) {
      adjacencyList.set(left, []);
    }
    if (!adjacencyList.has(right)) {
      adjacencyList.set(right, []);
    }
    adjacencyList.get(left)!.push(right);
    adjacencyList.get(right)!.push(left);
  });

  let start = 0;
  for (let key of adjacencyList.keys()) {
    if (adjacencyList.get(key)!.length === 1) {
      start = key;
      break;
    }
  }

  let stack = [start];
  let result = [];
  let visited = new Set();
  while (stack.length > 0) {
    let current = stack.pop()!;
    if (visited.has(current)) {
      continue;
    }
    result.push(current);
    visited.add(current);

    let next = adjacencyList.get(current)!.find((n) => !visited.has(n));
    if (next !== undefined) {
      stack.push(next);
    }
  }
  return result;
}
