export function largestRectangleArea(heights: number[]): number {
  let result = 0;
  const length = heights.length;
  const cache = new Map<number, number[]>();
  for (let i = 0; i < length; i++) {
    let height = heights[i];
    let count = 1;
    const cached = cache.get(i - 1);
    if (cached && cached[0] === height) {
      cache.set(i, [cached[0], cached[1]]);
      continue;
    }

    for (let j = i + 1; j < length && heights[j] >= heights[i]; j++) {
      count++;
    }
    for (let j = i - 1; j >= 0 && heights[j] >= heights[i]; j--) {
      count++;
    }
    const area = height * count;
    result = Math.max(result, area);
    cache.set(i, [height, result]);
  }
  return result;
}
