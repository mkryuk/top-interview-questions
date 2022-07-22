export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  // create a map of course -> prerequisites
  const map = new Map<number, number[]>();
  prerequisites.forEach((edge) => {
    if (map.has(edge[1])) {
      map.get(edge[1])!.push(edge[0]);
    } else {
      map.set(edge[1], [edge[0]]);
    }
  });

  const path = new Array(numCourses).fill(false);
  const checked = new Array(numCourses).fill(false);
  for (let course = 0; course < numCourses; course++) {
    if (hasCycle(course, map, path, checked)) {
      return false;
    }
  }
  return true;
}

function hasCycle(
  course: number,
  map: Map<number, number[]>,
  path: boolean[],
  checked: boolean[],
): boolean {
  if (checked[course]) {
    return false;
  }
  if (path[course]) {
    return true;
  }
  if (!map.has(course)) {
    return false;
  }

  let result = false;
  path[course] = true;
  let prerequisites = map.get(course)!;
  for (let i = 0; i < prerequisites.length; i++) {
    result = hasCycle(prerequisites[i], map, path, checked);
    if (result) {
      break;
    }
  }
  path[course] = false;
  checked[course] = true;
  return result;
}
