export function findRelativeRanks(score: number[]): string[] {
  const positionMap = new Map(
    [...score].sort((a, b) => b - a).map((v, i) => [v, i + 1]),
  );
  const result: string[] = [];
  for (const s of score) {
    const position = positionMap.get(s)!;
    if (position === 1) {
      result.push("Gold Medal");
    } else if (position === 2) {
      result.push("Silver Medal");
    } else if (position === 3) {
      result.push("Bronze Medal");
    } else {
      result.push(`${position}`);
    }
  }
  return result;
}
