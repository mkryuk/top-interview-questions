import { arrayToTreeNode } from "../common";
import { maxDepth } from "./solution";

it("maxDepth should return 3 for root = [3,9,20,null,null,15,7]", function () {
  const root = [3, 9, 20, null, null, 15, 7];
  const tree = arrayToTreeNode(root);
  const result = maxDepth(tree);
  expect(result).toBe(3);
});

it("maxDepth should return 2 for root = [1,null,2]", function () {
  const root = [1, null, 2];
  const tree = arrayToTreeNode(root);
  const result = maxDepth(tree);
  expect(result).toBe(2);
});

it("maxDepth should return 0 for root = []", function () {
  const root: (number | null)[] = [];
  const tree = arrayToTreeNode(root);
  const result = maxDepth(tree);
  expect(result).toBe(0);
});

it("maxDepth should return 1 for root = [0]", function () {
  const root = [0];
  const tree = arrayToTreeNode(root);
  const result = maxDepth(tree);
  expect(result).toBe(1);
});
