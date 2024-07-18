import { arrayToTreeNode } from "../common";
import { countPairs } from "./solution";

describe("Number of Good Leaf Nodes Pairs", () => {
  it("countPairs should return 1 for root = [1,2,3,null,4], distance = 3", () => {
    const nodes = [1, 2, 3, null, 4];
    const root = arrayToTreeNode(nodes);
    const distance = 3;
    const result = countPairs(root, distance);
    expect(result).toEqual(1);
  });

  it("countPairs should return 2 for root = [1,2,3,4,5,6,7], distance = 3", () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7];
    const root = arrayToTreeNode(nodes);
    const distance = 3;
    const result = countPairs(root, distance);
    expect(result).toEqual(2);
  });

  it("countPairs should return 1 for root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3", () => {
    const nodes = [7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2];
    const root = arrayToTreeNode(nodes);
    const distance = 3;
    const result = countPairs(root, distance);
    expect(result).toEqual(1);
  });
});
