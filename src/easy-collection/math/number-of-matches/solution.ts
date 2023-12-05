export function numberOfMatches(n: number): number {
  // Each match is played between two teams.
  // One team wins, one team loses.
  // Thus, each match eliminates exactly one team.
  return n - 1;
}
