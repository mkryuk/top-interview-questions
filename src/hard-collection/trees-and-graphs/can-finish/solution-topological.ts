interface GNode {
  depCount: number;
  outNodes: number[];
}

export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  if (prerequisites.length === 0) {
    return true;
  }

  // course -> list of next courses
  let graph = new Map<number, GNode>();
  prerequisites.forEach((relation) => {
    // relation[1] -> relation[0]
    const [next, prev] = relation;
    const prevCourse = getCreateGNode(graph, prev);
    const nextCourse = getCreateGNode(graph, next);
    prevCourse.outNodes.push(next);
    nextCourse.depCount++;
  });
  const totalEdges = prerequisites.length;
  let rootCourses: number[] = [];
  // find all courses with no prerequisites
  graph.forEach((node, key) => {
    if (node.depCount === 0) {
      rootCourses.push(key);
    }
  });
  let removedEdges = 0;
  while (rootCourses.length > 0) {
    let course = rootCourses.pop()!;
    graph.get(course)!.outNodes.forEach((nextCourse) => {
      const nextCourseNode = graph.get(nextCourse)!;
      nextCourseNode.depCount--;
      removedEdges++;
      if (nextCourseNode.depCount === 0) {
        rootCourses.push(nextCourse);
      }
    });
  }
  // if there are more edges than total edges, there is a cycle
  return removedEdges === totalEdges;
}

function getCreateGNode(graph: Map<number, GNode>, course: number): GNode {
  if (graph.has(course)) {
    return graph.get(course)!;
  }
  const node: GNode = {
    depCount: 0,
    outNodes: [],
  };
  graph.set(course, node);
  return node;
}
