import { Graph } from "./solution";

describe("Design Graph With Shortest Path Calculator", () => {
  it("shortestPath should pass test 1", () => {
    let g = new Graph(4, [
      [0, 2, 5],
      [0, 1, 2],
      [1, 2, 1],
      [3, 0, 3],
    ]);
    expect(g.shortestPath(3, 2)).toEqual(6); // return 6. The shortest path from 3 to 2 in the first diagram above is 3 -> 0 -> 1 -> 2 with a total cost of 3 + 2 + 1 = 6.
    expect(g.shortestPath(0, 3)).toEqual(-1); // return -1. There is no path from 0 to 3.
    g.addEdge([1, 3, 4]); // We add an edge from node 1 to node 3, and we get the second diagram above.
    expect(g.shortestPath(0, 3)).toEqual(6); // return 6. The shortest path from 0 to 3 now is 0 -> 1 -> 3 with a total cost of 2 + 4 = 6.
  });
});
