export function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  // Initialize the cost array with Infinity, except for the start point.
  let cost: number[] = new Array(n).fill(Infinity);
  cost[src] = 0;

  // Temporary array for updating costs in each iteration to avoid using already updated costs.
  let tempCost: number[] = [...cost];

  // Relax the edges up to K+1 times.
  for (let i = 0; i <= k; i++) {
    tempCost = [...cost]; // Copy the current state to use for this iteration's updates
    for (let [from, to, price] of flights) {
      if (cost[from] === Infinity) {
        continue; // Skip if `from` is not reachable
      }
      // Relax the edge if a cheaper path is found
      if (cost[from] + price < tempCost[to]) {
        tempCost[to] = cost[from] + price;
      }
    }
    cost = [...tempCost]; // Update costs for the next iteration
  }

  // Return the cheapest cost to reach dst. If Infinity, destination is not reachable within K stops.
  return cost[dst] === Infinity ? -1 : cost[dst];
}
