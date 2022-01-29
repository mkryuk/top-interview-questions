import { inorderSuccessor } from "./solution";
import { arrayToTreeNode, treeNodeToArray } from "../common";

it("inorderSuccessor should return [2] for root = [2,1,3], p = [1]", function () {
  const root = [2, 1, 3],
    p = [1];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  const resultArray = treeNodeToArray(result);
  expect(resultArray).toEqual([2]);
});

it("inorderSuccessor should return null for root = [5,3,6,2,4,null,null,1], p = [6]", function () {
  const root = [5, 3, 6, 2, 4, null, null, 1],
    p = [6];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result).toEqual(null);
});
