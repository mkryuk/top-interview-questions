export function minScore(n: number, roads: number[][]): number {
  const graph: Array<Array<[number, number]>> = Array.from(
    { length: n + 1 },

    () => [],
  );
  for (const [a, b, distance] of roads) {
    graph[a].push([b, distance]);
    graph[b].push([a, distance]);
  }

  const visited: boolean[] = Array(n + 1).fill(false);
  const stack: number[] = [1];
  visited[1] = true;
  let result = Infinity;

  while (stack.length > 0) {
    const city = stack.pop()!;
    for (const [nextCity, distance] of graph[city]) {
      result = Math.min(result, distance);
      if (!visited[nextCity]) {
        visited[nextCity] = true;
        stack.push(nextCity);
      }
    }
  }

  return result;
}
