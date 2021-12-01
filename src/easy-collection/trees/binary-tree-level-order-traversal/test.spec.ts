import { arrayToTreeNode } from "../common";
import { levelOrder } from "./solution";

it("levelOrder should return [[3],[9,20],[15,7]] for root = [3,9,20,null,null,15,7]", function () {
  const root = [3, 9, 20, null, null, 15, 7];
  const tree = arrayToTreeNode(root);
  const result = levelOrder(tree);
  expect(result).toEqual([[3], [9, 20], [15, 7]]);
});

it("levelOrder should return [[1]] for root = [1]", function () {
  const root = [1];
  const tree = arrayToTreeNode(root);
  const result = levelOrder(tree);
  expect(result).toEqual([[1]]);
});

it("levelOrder should return [] for root = []", function () {
  const root: number[] = [];
  const tree = arrayToTreeNode(root);
  const result = levelOrder(tree);
  expect(result).toEqual([[1]]);
});
