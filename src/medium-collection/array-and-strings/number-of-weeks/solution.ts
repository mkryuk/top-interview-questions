export function numberOfWeeks(milestones: number[]): number {
  let totalMilestones = 0;
  let maxMilestones = 0;

  for (const milestone of milestones) {
    totalMilestones += milestone;
    maxMilestones = Math.max(maxMilestones, milestone);
  }

  const otherMilestones = totalMilestones - maxMilestones;
  if (maxMilestones > otherMilestones + 1) {
    return 2 * otherMilestones + 1;
  } else {
    return totalMilestones;
  }
}
