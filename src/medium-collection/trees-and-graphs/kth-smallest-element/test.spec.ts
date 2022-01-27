import { arrayToTreeNode } from "../../../easy-collection/trees/common";
import { kthSmallest } from "./solution";

it("kthSmallest should return 1 for root = [3,1,4,null,2], k = 1", () => {
  const root = [3, 1, 4, null, 2],
    k = 1;
  const rootTreeNode = arrayToTreeNode(root);
  const result = kthSmallest(rootTreeNode, k);
  expect(result).toBe(1);
});

it("kthSmallest should return 3 for root = [5,3,6,2,4,null,null,1], k = 3", () => {
  const root = [5, 3, 6, 2, 4, null, null, 1],
    k = 3;
  const rootTreeNode = arrayToTreeNode(root);
  const result = kthSmallest(rootTreeNode, k);
  expect(result).toBe(3);
});

it("kthSmallest should return 5 for root = [4,2,6,1,3,5,7], k = 5", () => {
  const root = [4, 2, 6, 1, 3, 5, 7],
    k = 5;
  const rootTreeNode = arrayToTreeNode(root);
  const result = kthSmallest(rootTreeNode, k);
  expect(result).toBe(5);
});
