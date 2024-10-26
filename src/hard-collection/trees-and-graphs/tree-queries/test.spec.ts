import { arrayToTreeNode } from "../common";
import { treeQueries } from "./solution";

describe("Height of Binary Tree After Subtree Removal Queries", () => {
  it("treeQueries should return [2] for root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]", () => {
    const nodes = [1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7];
    const queries = [4];
    const root = arrayToTreeNode(nodes);
    const result = treeQueries(root, queries);
    expect(result).toEqual([2]);
  });

  it("treeQueries should return [3,2,3,2] for root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]", () => {
    const nodes = [5, 8, 9, 2, 1, 3, 7, 4, 6];
    const queries = [3, 2, 4, 8];
    const root = arrayToTreeNode(nodes);
    const result = treeQueries(root, queries);
    expect(result).toEqual([3, 2, 3, 2]);
  });
});
