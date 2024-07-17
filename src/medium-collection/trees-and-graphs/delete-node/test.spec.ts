import { arrayToTreeNode, treeNodeToArray } from "../common";
import { delNodes } from "./solution";

describe("Delete Nodes And Return Forest", () => {
  it("delNodes should return [[1,2,null,4],[6],[7]] for root = [1,2,3,4,5,6,7], to_delete = [3,5]", () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7];
    const to_delete = [3, 5];
    const root = arrayToTreeNode(nodes);
    const result = delNodes(root, to_delete);
    const resultArray = [...result.map((n) => treeNodeToArray(n))];
    expect(resultArray).toEqual([[1, 2, null, 4], [6], [7]]);
  });

  it("delNodes should return [[1,2,4]] for root = [1,2,4,null,3], to_delete = [3]", () => {
    const nodes = [1, 2, 4, null, 3];
    const to_delete = [3];
    const root = arrayToTreeNode(nodes);
    const result = delNodes(root, to_delete);
    const resultArray = [...result.map((n) => treeNodeToArray(n))];
    expect(resultArray).toEqual([[1, 2, 4]]);
  });
});
