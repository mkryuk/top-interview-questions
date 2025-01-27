export function maximumInvitations(favorite: number[]): number {
  const n = favorite.length;
  const reversedGraph: number[][] = Array.from({ length: n }, () => []);
  for (let person = 0; person < n; person++) {
    reversedGraph[favorite[person]].push(person);
  }

  let longestCycle = 0;
  let twoCycleInvitations = 0;
  const visited = new Array(n).fill(false);

  // find all cycles
  for (let person = 0; person < n; person++) {
    if (!visited[person]) {
      const visitedPersons = new Map<number, number>();
      let current = person;
      let distance = 0;
      while (true) {
        if (visited[current]) {
          break;
        }
        visited[current] = true;
        visitedPersons.set(current, distance++);
        const nextPerson = favorite[current];
        if (visitedPersons.has(nextPerson)) {
          // cycle detected
          const cycleLength = distance - visitedPersons.get(nextPerson)!;
          longestCycle = Math.max(longestCycle, cycleLength);
          if (cycleLength === 2) {
            const visitedNodes = new Set([current, nextPerson]);
            twoCycleInvitations +=
              2 + bfs(nextPerson, visitedNodes, reversedGraph) + bfs(current, visitedNodes, reversedGraph);
          }
          break;
        }
        current = nextPerson;
      }
    }
  }

  return Math.max(longestCycle, twoCycleInvitations);
}

function bfs(startNode: number, visitedNodes: Set<number>, reversedGraph: number[][]): number {
  const queue: [number, number][] = [[startNode, 0]];
  let maxDistance = 0;
  let front = 0;
  while (front < queue.length) {
    const [currentNode, currentDistance] = queue[front++];
    for (const neighbor of reversedGraph[currentNode]) {
      if (visitedNodes.has(neighbor)) {
        continue;
      }
      visitedNodes.add(neighbor);
      queue.push([neighbor, currentDistance + 1]);
      maxDistance = Math.max(maxDistance, currentDistance + 1);
    }
  }
  return maxDistance;
}
