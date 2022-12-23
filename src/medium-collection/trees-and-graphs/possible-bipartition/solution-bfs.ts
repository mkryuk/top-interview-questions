export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  // we create a graph with relations
  const relations = new Map<number, number[]>();
  dislikes.forEach(([left, right]) => {
    if (!relations.get(left)) {
      relations.set(left, [right]);
    } else {
      relations.get(left)!.push(right);
    }
    if (!relations.get(right)) {
      relations.set(right, [left]);
    } else {
      relations.get(right)!.push(left);
    }
  });
  // create groups array to move person to one or another
  const groups = new Array(n + 1).fill(-1);
  for (let i = 1; i <= n; i++) {
    // if we didn't check this person check his relations
    if (groups[i] === -1 && !bfs(i, groups, relations)) {
      return false;
    }
  }
  return true;
}

function bfs(
  person: number,
  groups: number[],
  relations: Map<number, number[]>,
): boolean {
  const stack = [person];
  // let's move our person to 0 group
  groups[person] = 0;
  while (stack.length) {
    const origin = stack.pop()!;
    const neighbors = relations.get(origin) ?? [];
    // for every neighbor
    for (let i = 0; i < neighbors.length; i++) {
      // if our neighbor is already in our group
      // we unable to split everyone into two groups
      if (groups[origin] === groups[neighbors[i]]) {
        return false;
      }
      if (groups[neighbors[i]] === -1) {
        // move our neighbors to other group
        groups[neighbors[i]] = 1 - groups[origin];
        stack.push(neighbors[i]);
      }
    }
  }
  return true;
}
