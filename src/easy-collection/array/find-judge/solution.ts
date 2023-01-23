export function findJudge(n: number, trust: number[][]): number {
  if (n === 1 && trust.length === 0) {
    return 1;
  }
  const trustedBy = new Map<number, number>();
  const trustOthers = new Map<number, number>();
  // fill both trusted maps with trusted by and who trust others
  trust.forEach(([who, whom]) => {
    [
      { trustMap: trustedBy, person: whom },
      { trustMap: trustOthers, person: who },
    ].forEach(({ trustMap, person }) => {
      if (!trustMap.has(person)) {
        trustMap.set(person, 0);
      }
      trustMap.set(person, trustMap.get(person)! + 1);
    });
  });

  let result = -1;
  trustedBy.forEach((count, whom) => {
    if (count === n - 1 && !trustOthers.has(whom)) {
      result = whom;
    }
  });
  return result;
}
