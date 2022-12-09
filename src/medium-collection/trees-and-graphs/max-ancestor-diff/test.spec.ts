import { arrayToTreeNode } from "../common";
import { maxAncestorDiff } from "./solution";

it("maxAncestorDiff should return 7 for root = [8,3,10,1,6,null,14,null,null,4,7,13]", () => {
  const nodes = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13];
  const root = arrayToTreeNode(nodes);
  const result = maxAncestorDiff(root);
  expect(result).toEqual(7);
});

it("maxAncestorDiff should return 3 for root = [1,null,2,null,0,3]", () => {
  const nodes = [1, null, 2, null, 0, 3];
  const root = arrayToTreeNode(nodes);
  const result = maxAncestorDiff(root);
  expect(result).toEqual(3);
});
