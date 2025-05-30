import { closestMeetingNode } from "./solution";

describe("2359. Find Closest Node to Given Two Nodes", () => {
  it("closestMeetingNode should return 2 for edges = [2,2,3,-1], node1 = 0, node2 = 1", () => {
    const edges = [2, 2, 3, -1];
    const node1 = 0;
    const node2 = 1;
    const result = closestMeetingNode(edges, node1, node2);
    expect(result).toEqual(2);
  });

  it("closestMeetingNode should return 2 for edges = [1,2,-1], node1 = 0, node2 = 2", () => {
    const edges = [1, 2, -1];
    const node1 = 0;
    const node2 = 2;
    const result = closestMeetingNode(edges, node1, node2);
    expect(result).toEqual(2);
  });
});
