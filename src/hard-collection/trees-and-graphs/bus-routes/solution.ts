export function numBusesToDestination(
  routes: number[][],
  source: number,
  target: number,
): number {
  if (source === target) return 0;

  let n = routes.length;
  let stopToBus = new Map<number, number[]>();

  // Map each stop to the buses (routes) that go through it
  for (let i = 0; i < n; i++) {
    for (let stop of routes[i]) {
      if (!stopToBus.has(stop)) stopToBus.set(stop, []);
      stopToBus.get(stop)!.push(i);
    }
  }

  // Set to keep track of visited routes
  let visitedRoutes = new Set<number>();

  // Queue for BFS: [stop, count]
  let queue: [number, number][] = [[source, 0]];

  while (queue.length > 0) {
    let [stop, count] = queue.shift()!;

    // Check all routes passing through the current stop
    for (let route of stopToBus.get(stop) || []) {
      if (visitedRoutes.has(route)) continue;
      visitedRoutes.add(route);

      for (let nextStop of routes[route]) {
        if (nextStop === target) return count + 1;
        queue.push([nextStop, count + 1]);
      }
    }
  }

  return -1;
}
