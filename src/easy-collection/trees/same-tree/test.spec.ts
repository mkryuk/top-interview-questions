import { arrayToTreeNodeLevel } from "../common";
import { isSameTree } from "./solution";

it("isSameTree should return true for p = [1,2,3], q = [1,2,3]", () => {
  const pNodes = [1, 2, 3];
  const qNodes = [1, 2, 3];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeTrue();
});

it("isSameTree should return false for p = [1,2], q = [1,null,2]", () => {
  const pNodes = [1, 2];
  const qNodes = [1, null, 2];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});

it("isSameTree should return false for p = [1,2,3,4], q = [1,3,2,null,null,null,4]", () => {
  const pNodes = [1, 2, 3, 4];
  const qNodes = [1, 3, 2, null, null, null, 4];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});

it("isSameTree should return true for p = [1,2,3,4], q = [1,2,3,4,null,null,null,null]", () => {
  const pNodes = [1, 2, 3, 4];
  const qNodes = [1, 2, 3, 4, null, null, null, null];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeTrue();
});

it("isSameTree should return true for p = [1], q = [1]", () => {
  const pNodes = [1];
  const qNodes = [1];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeTrue();
});

it("isSameTree should return false for p = [1], q = [2]", () => {
  const pNodes = [1];
  const qNodes = [2];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});

it("isSameTree should return false for p = [1,2,3], q = [1,3,2]", () => {
  const pNodes = [1, 2, 3];
  const qNodes = [1, 3, 2];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});

it("isSameTree should return false for p = [1,2,3,4], q = [1,2,3,4,null,null,null,null,5]", () => {
  const pNodes = [1, 2, 3, 4];
  const qNodes = [1, 2, 3, 4, null, null, null, null, 5];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});

it("isSameTree should return false for p = [1,2,3], q = [1,2,3,null,null,null,4]", () => {
  const pNodes = [1, 2, 3];
  const qNodes = [1, 2, 3, null, null, null, 4];
  const p = arrayToTreeNodeLevel(pNodes);
  const q = arrayToTreeNodeLevel(qNodes);
  const result = isSameTree(p, q);
  expect(result).toBeFalse();
});
