export function maxBuilding(n: number, restrictions: number[][]): number {
  restrictions.push([1, 0]);
  restrictions.push([n, n - 1]);
  restrictions.sort((a, b) => {
    return a[0] - b[0];
  });

  const m = restrictions.length;

  // left to right: building i cannot grow faster than +1 from previous restriction
  for (let i = 1; i < m; i++) {
    const distance = restrictions[i][0] - restrictions[i - 1][0];
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i - 1][1] + distance);
  }

  // right to left: building i cannot grow faster than +1 from next restriction
  for (let i = m - 2; i >= 0; i--) {
    const distance = restrictions[i + 1][0] - restrictions[i][0];
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i + 1][1] + distance);
  }

  let result = 0;
  for (let i = 1; i < m; i++) {
    const leftId = restrictions[i - 1][0];
    const leftHeight = restrictions[i - 1][1];
    const rightId = restrictions[i][0];
    const rightHeight = restrictions[i][1];
    const distance = rightId - leftId;
    // maximum peak between two limited points:
    // climb from lower side and descend to higher side
    const peak = Math.floor((leftHeight + rightHeight + distance) / 2);
    result = Math.max(result, peak);
  }

  return result;
}
