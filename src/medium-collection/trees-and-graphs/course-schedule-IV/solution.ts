export function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
  const isReachable = new Map<number, Set<number>>();
  const graph = new Map<number, number[]>();
  for (const [from, to] of prerequisites) {
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from)!.push(to);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!isReachable.has(i)) {
      isReachable.set(i, new Set());
    }
    const visited = new Set<number>();
    const prerequisites = [...(graph.get(i) ?? [])];
    while (prerequisites.length > 0) {
      const prerequisite = prerequisites.pop()!;
      if (!visited.has(prerequisite)) {
        visited.add(prerequisite);
        isReachable.get(i)!.add(prerequisite);
        prerequisites.push(...(graph.get(prerequisite) ?? []));
      }
    }
  }

  const result: boolean[] = [];
  for (const [from, to] of queries) {
    result.push(isReachable.get(from)?.has(to) ?? false);
  }

  return result;
}
