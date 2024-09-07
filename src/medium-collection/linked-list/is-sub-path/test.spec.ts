import { arrayToTreeNode } from "../../trees-and-graphs/common";
import { arrayToList } from "../common";
import { isSubPath } from "./solution";

describe("Linked List in Binary Tree", () => {
  it("isSubPath should return true for head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]", () => {
    const listNodes = [4, 2, 8];
    const treeNodes = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
    const head = arrayToList(listNodes);
    const root = arrayToTreeNode(treeNodes);
    const result = isSubPath(head, root);
    expect(result).toBeTrue();
  });

  it("isSubPath should return true for head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]", () => {
    const listNodes = [1, 4, 2, 6];
    const treeNodes = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
    const head = arrayToList(listNodes);
    const root = arrayToTreeNode(treeNodes);
    const result = isSubPath(head, root);
    expect(result).toBeTrue();
  });

  it("isSubPath should return false for head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]", () => {
    const listNodes = [1, 4, 2, 6, 8];
    const treeNodes = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
    const head = arrayToList(listNodes);
    const root = arrayToTreeNode(treeNodes);
    const result = isSubPath(head, root);
    expect(result).toBeTrue();
  });
});
