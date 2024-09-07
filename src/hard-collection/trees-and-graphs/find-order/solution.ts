interface GNode {
  depth: number;
  nextNodes: number[];
}

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph = new Map<number, GNode>();
  // init graph
  for (let course = 0; course < numCourses; course++) {
    getCreateNode(graph, course);
  }

  // add edges course -> list of next courses
  prerequisites.forEach((edge) => {
    const [next, prev] = edge;
    const prevNode = getCreateNode(graph, prev);
    const nextNode = getCreateNode(graph, next);
    prevNode.nextNodes.push(next);
    nextNode.depth++;
  });

  const rootCourses: number[] = [];
  const totalEdges = prerequisites.length;
  // find all courses with no prerequisites
  graph.forEach((node, course) => {
    if (node.depth == 0) {
      rootCourses.push(course);
    }
  });

  let removedEdges = 0;
  const result: number[] = [];
  while (rootCourses.length) {
    const course = rootCourses.shift()!;
    result.push(course);
    const node = getCreateNode(graph, course);
    node.nextNodes.forEach((nextCourse) => {
      const nextNode = getCreateNode(graph, nextCourse);
      nextNode.depth--;
      removedEdges++;
      if (nextNode.depth === 0) {
        rootCourses.push(nextCourse);
      }
    });
  }

  // if there are more edges than total edges, there is a cycle
  return removedEdges === totalEdges ? result : [];
}

function getCreateNode(graph: Map<number, GNode>, course: number): GNode {
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
