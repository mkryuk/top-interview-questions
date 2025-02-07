export function queryResults(limit: number, queries: number[][]): number[] {
  // map ball and it's color
  const ballColors = new Map<number, number>();
  // map color and balls count
  const colorCounts = new Map<number, number>();
  const results: number[] = [];

  for (const [ball, color] of queries) {
    const ballColor = ballColors.get(ball);

    if (ballColor === undefined) {
      ballColors.set(ball, color);
      colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
      results.push(colorCounts.size);
      continue;
    }

    if (ballColor !== color) {
      const oldColorCount = colorCounts.get(ballColor)! - 1;
      // remove color if no balls remain or update count for old color
      oldColorCount === 0 ? colorCounts.delete(ballColor) : colorCounts.set(ballColor, oldColorCount);
      ballColors.set(ball, color);
      colorCounts.set(color, (colorCounts.get(color) || 0) + 1);
    }

    results.push(colorCounts.size);
  }

  return results;
}
