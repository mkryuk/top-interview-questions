import { eventualSafeNodes } from "./solution";

describe("Find Eventual Safe States", () => {
  it("eventualSafeNodes should return [2,4,5,6] for graph = [[1,2],[2,3],[5],[0],[5],[],[]]", () => {
    const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
    const result = eventualSafeNodes(graph);
    expect(result).toEqual([2, 4, 5, 6]);
  });

  it("eventualSafeNodes should return [4] for graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]", () => {
    const graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []];
    const result = eventualSafeNodes(graph);
    expect(result).toEqual([4]);
  });

  it("eventualSafeNodes should return [0,1,2,3,4] for graph = [[],[0,2,3,4],[3],[4],[]]", () => {
    const graph = [[], [0, 2, 3, 4], [3], [4], []];
    const result = eventualSafeNodes(graph);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});
