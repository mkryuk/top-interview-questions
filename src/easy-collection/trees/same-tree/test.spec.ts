import { arrayToTreeNode } from "../common";
import { isSameTree } from "./solution";

it("isSameTree should return true for p = [1,2,3], q = [1,2,3]", () => {
  const pNodes = [1, 2, 3];
  const qNodes = [1, 2, 3];
  const p = arrayToTreeNode(pNodes);
  const q = arrayToTreeNode(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeTrue();
});

it("isSameTree should return false for p = [1,2], q = [1,null,2]", () => {
  const pNodes = [1, 2];
  const qNodes = [1, null, 2];
  const p = arrayToTreeNode(pNodes);
  const q = arrayToTreeNode(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});
