import { arrayToTreeNode } from "../../../easy-collection/trees/common";
import { kthSmallest } from "./solution";

it("kthSmallest should return 1 for root = [3,1,4,null,2], k = 1", () => {
  const root = [3, 1, 4, null, 2],
    k = 1;
  const rootTreeNode = arrayToTreeNode(root);
  const result = kthSmallest(rootTreeNode, k);
  expect(result).toBe(1);
});

it("kthSmallest should return 3for root = [5,3,6,2,4,null,null,1], k = 3", () => {
  const root = [5, 3, 6, 2, 4, null, null, 1],
    k = 3;
  const rootTreeNode = arrayToTreeNode(root);
  const result = kthSmallest(rootTreeNode, k);
  expect(result).toBe(3);
});
