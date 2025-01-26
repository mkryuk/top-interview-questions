export function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const indexed = nums.map((num, index) => ({ num, index }));
  indexed.sort((a, b) => a.num - b.num);
  const groups: { num: number; index: number }[][] = [];
  let currentGroup: { num: number; index: number }[] = [indexed[0]];
  for (let i = 1; i < indexed.length; i++) {
    const previous = indexed[i - 1];
    const current = indexed[i];
    if (current.num - previous.num <= limit) {
      currentGroup.push(current);
    } else {
      groups.push(currentGroup);
      currentGroup = [current];
    }
  }

  // push the last group
  groups.push(currentGroup);

  const result = new Array(nums.length);
  for (const group of groups) {
    group.sort((a, b) => a.index - b.index);
    const sortedValues = group.map((item) => item.num).sort((a, b) => a - b);
    for (let i = 0; i < group.length; i++) {
      result[group[i].index] = sortedValues[i];
    }
  }

  return result;
}
