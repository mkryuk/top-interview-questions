import { arrayToTreeNodeLevel } from "../common";
import { maxAncestorDiff } from "./solution";

it("maxAncestorDiff should return 7 for root = [8,3,10,1,6,null,14,null,null,4,7,13]", () => {
  const nodes = [8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13];
  const root = arrayToTreeNodeLevel(nodes);
  const result = maxAncestorDiff(root);
  expect(result).toEqual(7);
});

it("maxAncestorDiff should return 3 for root = [1,null,2,null,0,3]", () => {
  // prettier-ignore
  const nodes = [1, null, 2, null, null, null, 0, null, null, null, null, null, null, 3, null];
  const root = arrayToTreeNodeLevel(nodes);
  const result = maxAncestorDiff(root);
  expect(result).toEqual(3);
});
