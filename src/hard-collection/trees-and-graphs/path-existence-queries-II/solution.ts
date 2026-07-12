export function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): number[] {
  const sortedNodes = createSortedNodes(nums);
  const position = createPositionMap(sortedNodes, n);
  const sortedValues = sortedNodes.map((node) => nums[node]);

  const farthest = createFarthestReach(sortedValues, maxDiff);
  const componentIds = createComponentIds(sortedValues, maxDiff);
  const jumpTable = createJumpTable(farthest);

  const result: number[] = [];

  for (const [firstNode, secondNode] of queries) {
    const firstPosition = position[firstNode];
    const secondPosition = position[secondNode];
    const answer = findMinimumDistance(firstPosition, secondPosition, componentIds, jumpTable);
    result.push(answer);
  }

  return result;
}

function createSortedNodes(nums: number[]): number[] {
  const nodes = Array.from({ length: nums.length }, (_, index) => index);
  nodes.sort((first, second) => nums[first] - nums[second]);
  return nodes;
}

function createPositionMap(sortedNodes: number[], n: number): number[] {
  const position = new Array<number>(n);

  for (let rank = 0; rank < n; rank++) {
    position[sortedNodes[rank]] = rank;
  }

  return position;
}

function createFarthestReach(sortedValues: number[], maxDiff: number): number[] {
  const n = sortedValues.length;
  const farthest = new Array<number>(n);

  let right = 0;

  for (let left = 0; left < n; left++) {
    if (right < left) {
      right = left;
    }

    while (right + 1 < n && sortedValues[right + 1] - sortedValues[left] <= maxDiff) {
      right++;
    }

    farthest[left] = right;
  }

  return farthest;
}

function createComponentIds(sortedValues: number[], maxDiff: number): number[] {
  const n = sortedValues.length;
  const componentIds = new Array<number>(n);

  let componentId = 0;
  componentIds[0] = componentId;

  for (let index = 1; index < n; index++) {
    // a gap larger than maxDiff separates two components
    if (sortedValues[index] - sortedValues[index - 1] > maxDiff) {
      componentId++;
    }

    componentIds[index] = componentId;
  }

  return componentIds;
}

function createJumpTable(farthest: number[]): number[][] {
  const n = farthest.length;
  const levels = Math.ceil(Math.log2(Math.max(1, n))) + 1;

  const jumpTable = Array.from({ length: levels }, () => new Array<number>(n));

  for (let index = 0; index < n; index++) {
    jumpTable[0][index] = farthest[index];
  }

  for (let level = 1; level < levels; level++) {
    for (let index = 0; index < n; index++) {
      const middle = jumpTable[level - 1][index];

      jumpTable[level][index] = jumpTable[level - 1][middle];
    }
  }

  return jumpTable;
}

function findMinimumDistance(
  firstPosition: number,
  secondPosition: number,
  componentIds: number[],
  jumpTable: number[][],
): number {
  if (firstPosition === secondPosition) {
    return 0;
  }

  let left = Math.min(firstPosition, secondPosition);
  const right = Math.max(firstPosition, secondPosition);

  if (componentIds[left] !== componentIds[right]) {
    return -1;
  }

  let distance = 0;

  // take the largest jumps that still leave us before the destination
  for (let level = jumpTable.length - 1; level >= 0; level--) {
    const nextPosition = jumpTable[level][left];

    if (nextPosition < right) {
      left = nextPosition;
      distance += 2 ** level;
    }
  }

  // one final jump reaches right or passes it
  return distance + 1;
}
