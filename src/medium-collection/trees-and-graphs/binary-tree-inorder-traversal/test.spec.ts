import { arrayToTreeNode } from "../common";
import { inorderTraversal } from "./solution";

it("inorderTraversal should return [1,3,2] for root = [1,null,2,3]", function () {
  const root = [1, null, 2, 3];
  const rootNode = arrayToTreeNode(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([1, 3, 2]);
});

it("inorderTraversal should return [] for root = []", function () {
  const root: number[] = [];
  const rootNode = arrayToTreeNode(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([]);
});

it("inorderTraversal should return [1] for root = [1]", function () {
  const root = [1];
  const rootNode = arrayToTreeNode(root);
  const result = inorderTraversal(rootNode);
  expect(result).toEqual([1]);
});
