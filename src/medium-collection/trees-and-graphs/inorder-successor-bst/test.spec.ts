import { inorderSuccessor } from "./solution";
import { arrayToTreeNode } from "../common";

it("inorderSuccessor should return 2 for root = [2,1,3], p = [1]", function () {
  const root = [2, 1, 3],
    p = [1];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result?.val).toEqual(2);
});

it("inorderSuccessor should return null for root = [5,3,6,2,4,null,null,1], p = [6]", function () {
  const root = [5, 3, 6, 2, 4, null, null, 1],
    p = [6];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result).toEqual(null);
});

it("inorderSuccessor should return 4 for root = [4,2,6,1,3,5,7], p = [3]", function () {
  const root = [4, 2, 6, 1, 3, 5, 7],
    p = [3];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result?.val).toEqual(4);
});

it("inorderSuccessor should return 7 for root = [4,2,6,1,3,5,7], p = [6]", function () {
  const root = [4, 2, 6, 1, 3, 5, 7],
    p = [6];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result?.val).toEqual(7);
});

it("inorderSuccessor should return 5 for root = [4,2,6,1,3,5,7], p = [4]", function () {
  const root = [4, 2, 6, 1, 3, 5, 7],
    p = [4];
  const rootNode = arrayToTreeNode(root);
  const pNode = arrayToTreeNode(p);
  const result = inorderSuccessor(rootNode, pNode);
  expect(result?.val).toEqual(5);
});
