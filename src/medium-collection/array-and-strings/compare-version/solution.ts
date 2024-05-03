export function compareVersion(version1: string, version2: string): number {
  const v1Revisions: number[] = version1.split(".").map(Number);
  const v2Revisions: number[] = version2.split(".").map(Number);

  const maxLength = Math.max(v1Revisions.length, v2Revisions.length);

  for (let i = 0; i < maxLength; i++) {
    const rev1 = v1Revisions[i] ?? 0;
    const rev2 = v2Revisions[i] ?? 0;
    if (rev1 !== rev2) {
      return rev1 < rev2 ? -1 : 1;
    }
  }

  return 0;
}
