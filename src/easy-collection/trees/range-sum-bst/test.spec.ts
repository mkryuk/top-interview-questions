import { arrayToTreeNode } from "../common";
import { rangeSumBST } from "./solution";

it("rangeSumBST should return 32 for root = [10,5,15,3,7,null,18], low = 7, high = 15", () => {
  const nodes = [10, 5, 15, 3, 7, null, 18];
  const low = 7;
  const high = 15;
  const root = arrayToTreeNode(nodes);
  const result = rangeSumBST(root, low, high);
  expect(result).toEqual(32);
});

it("rangeSumBST should return 23 for root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10", () => {
  // prettier-ignore
  const nodes = [10,5,15,3,7,13,18,1,null,6,null,null,null,null,null];
  const low = 6;
  const high = 10;
  const root = arrayToTreeNode(nodes);
  const result = rangeSumBST(root, low, high);
  expect(result).toEqual(23);
});
