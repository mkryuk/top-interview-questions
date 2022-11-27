import { arrayToTreeNode } from "../common";
import { diameterOfBinaryTree } from "./solution";

it("diameterOfBinaryTree should return 3 for root = [1,2,3,4,5]", () => {
  const arr = [1, 2, 3, 4, 5];
  const root = arrayToTreeNode(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(3);
});

it("diameterOfBinaryTree should return 1 for root = [1,2]", () => {
  const arr = [1, 2];
  const root = arrayToTreeNode(arr);
  const result = diameterOfBinaryTree(root);
  expect(result).toEqual(1);
});
