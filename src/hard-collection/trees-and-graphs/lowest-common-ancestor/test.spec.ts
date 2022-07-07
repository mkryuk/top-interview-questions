import { arrayToTreeNode, TreeNode } from "../common";
import { lowestCommonAncestor } from "./solution";

it("lowestCommonAncestor should return 3 for root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", () => {
  // prettier-ignore
  const rootArr = [ 3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, null, null, null, null];
  const p = new TreeNode(5);
  const q = new TreeNode(1);
  const root = arrayToTreeNode(rootArr);
  const result = lowestCommonAncestor(root, p, q);
  expect(result?.val).toBe(3);
});

it("lowestCommonAncestor should return 5 for root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4", () => {
  // prettier-ignore
  const rootArr = [ 3, 5, 1, 6, 2, 0, 8, null, null, 7, 4, null, null, null, null];
  const p = new TreeNode(5);
  const q = new TreeNode(4);
  const root = arrayToTreeNode(rootArr);
  const result = lowestCommonAncestor(root, p, q);
  expect(result?.val).toBe(5);
});

it("lowestCommonAncestor should return 3 for root = [5,3,4,7,8,6,9,2,1,10,11], p = 2, q = 1", () => {
  const rootArr = [5, 3, 4, 7, 8, 6, 9, 2, 1, 10, 11];
  const p = new TreeNode(2);
  const q = new TreeNode(1);
  const root = arrayToTreeNode(rootArr);
  const result = lowestCommonAncestor(root, p, q);
  expect(result?.val).toBe(3);
});

it("lowestCommonAncestor should return 1 for root = [1,2], p = 1, q = 2", () => {
  const rootArr = [1, 2];
  const p = new TreeNode(1);
  const q = new TreeNode(2);
  const root = arrayToTreeNode(rootArr);
  const result = lowestCommonAncestor(root, p, q);
  expect(result?.val).toBe(1);
});

it("lowestCommonAncestor should return 2 for rootArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];, p = 9, q = 11", () => {
  const rootArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const p = new TreeNode(9);
  const q = new TreeNode(11);
  const root = arrayToTreeNode(rootArr);
  const result = lowestCommonAncestor(root, p, q);
  expect(result?.val).toBe(2);
});
