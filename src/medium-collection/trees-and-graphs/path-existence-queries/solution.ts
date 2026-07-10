export function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {
  const componentIds: number[] = buildComponentIds(n, nums, maxDiff);
  const result: boolean[] = [];

  for (const [u, v] of queries) {
    result.push(componentIds[u] === componentIds[v]);
  }

  return result;
}

function buildComponentIds(n: number, nums: number[], maxDiff: number): number[] {
  const componentIds: number[] = new Array(n);
  let componentId = 0;
  componentIds[0] = componentId;

  for (let i = 1; i < n; i++) {
    const gap = nums[i] - nums[i - 1];
    // if adjacent numbers are too far apart, no path can cross this gap
    if (gap > maxDiff) {
      componentId++;
    }
    componentIds[i] = componentId;
  }

  return componentIds;
}
