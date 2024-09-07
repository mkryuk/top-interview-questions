export function minimumFuelCost(roads: number[][], seats: number): number {
  if (roads.length === 0) {
    return 0;
  }

  // Create a new Map object called "tree" to represent the road connections between nodes
  let tree = new Map<number, number[]>();
  roads.forEach(([from, to]) => {
    if (!tree.has(from)) {
      tree.set(from, []);
    }
    if (!tree.has(to)) {
      tree.set(to, []);
    }
    tree.get(from)!.push(to);
    tree.get(to)!.push(from);
  });
  let result = calculateFuelCost(seats, 0, new Set(), tree);
  return result.fuelSpent;
}

function calculateFuelCost(
  initialSeats: number,
  node: number,
  visited: Set<number>,
  tree: Map<number, number[]>,
): { seatsLeft: number; fuelSpent: number; cars: number } {
  let neighbors = tree.get(node)!;
  visited.add(node);

  let result = { seatsLeft: 0, fuelSpent: 0, cars: 0 };

  for (let i = 0; i < neighbors.length; i++) {
    if (visited.has(neighbors[i])) {
      continue;
    }
    let nodeResult = calculateFuelCost(initialSeats, neighbors[i], visited, tree);
    result.seatsLeft += nodeResult.seatsLeft;
    result.fuelSpent += nodeResult.fuelSpent;
    result.cars += nodeResult.cars;
  }

  // if we are in the capital return result
  if (node === 0) {
    return result;
  }

  // take one seat if any left
  if (result.seatsLeft > 0) {
    result.seatsLeft -= 1;
  } else {
    result.seatsLeft = initialSeats - 1;
    result.cars += 1;
  }

  // If there are enough seats left to fill a whole new car,
  // calculate how many cars can be filled and remove them from the result object.
  if (result.seatsLeft >= initialSeats) {
    let carsToRemove = Math.trunc(result.seatsLeft / initialSeats);
    result.seatsLeft = result.seatsLeft % initialSeats;
    result.cars -= carsToRemove;
  }

  result.fuelSpent += result.cars;

  return result;
}
