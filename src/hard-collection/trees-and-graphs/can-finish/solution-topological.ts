interface GNode {
  depth: number;
  nextNodes: number[];
}

export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  if (prerequisites.length === 0) {
    return true;
  }

  // course -> list of next courses
  const graph = new Map<number, GNode>();
  prerequisites.forEach((relation) => {
    // relation[1] -> relation[0]
    const [next, prev] = relation;
    const prevCourse = getCreateGNode(graph, prev);
    const nextCourse = getCreateGNode(graph, next);
    prevCourse.nextNodes.push(next);
    nextCourse.depth++;
  });
  const totalEdges = prerequisites.length;
  const rootCourses: number[] = [];
  // find all courses with no prerequisites
  graph.forEach((node, key) => {
    if (node.depth === 0) {
      rootCourses.push(key);
    }
  });
  let removedEdges = 0;
  while (rootCourses.length > 0) {
    let course = rootCourses.pop()!;
    graph.get(course)!.nextNodes.forEach((nextCourse) => {
      const nextCourseNode = graph.get(nextCourse)!;
      nextCourseNode.depth--;
      removedEdges++;
      if (nextCourseNode.depth === 0) {
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
    depth: 0,
    nextNodes: [],
  };
  graph.set(course, node);
  return node;
}
