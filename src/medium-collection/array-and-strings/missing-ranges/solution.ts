export function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number
): string[] {
  let result: string[] = [];
  if (nums.length === 0) {
    const diff = upper - lower;
    return diff >= 1 ? [`${lower}->${upper}`] : [`${lower}`];
  }
  if (lower < nums[0]) {
    let record = nums[0] - lower > 1 ? `${lower}->${nums[0] - 1}` : `${lower}`;
    result.push(record);
  }
  const lastIndex = nums.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    const diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      let record =
        diff === 2 ? `${nums[i] + 1}` : `${nums[i] + 1}->${nums[i + 1] - 1}`;
      result.push(record);
    }
  }

  if (upper > nums[lastIndex]) {
    let record =
      upper - nums[lastIndex] > 1
        ? `${nums[lastIndex] + 1}->${upper}`
        : `${upper}`;
    result.push(record);
  }
  return result;
}
