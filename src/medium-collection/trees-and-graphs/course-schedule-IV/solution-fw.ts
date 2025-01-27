export function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
  const isReachable = Array.from({ length: numCourses }, () => new Array(numCourses).fill(false));
  for (const [start, end] of prerequisites) {
    isReachable[start][end] = true;
  }

  for (let intermediate = 0; intermediate < numCourses; intermediate++) {
    for (let start = 0; start < numCourses; start++) {
      for (let end = 0; end < numCourses; end++) {
        // if we can get from start to intermediate and from intermediate to the end
        // then we can get from start to the end
        if (isReachable[start][intermediate] && isReachable[intermediate][end]) {
          isReachable[start][end] = true;
        }
      }
    }
  }

  const result: boolean[] = [];
  for (const [start, end] of queries) {
    result.push(isReachable[start][end]);
  }
  return result;
}
