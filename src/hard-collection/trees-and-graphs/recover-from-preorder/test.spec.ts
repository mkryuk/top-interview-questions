import { arrayToTreeNode, treeNodeToArray } from "../common";
import { recoverFromPreorder } from "./solution";

describe("Recover a Tree From Preorder Traversal", () => {
  it('recoverFromPreorder should return [1,2,5,3,4,6,7] for traversal = "1-2--3--4-5--6--7"', () => {
    const traversal = "1-2--3--4-5--6--7";
    const root = recoverFromPreorder(traversal);
    const result = treeNodeToArray(root);
    expect(result).toEqual([1, 2, 5, 3, 4, 6, 7]);
  });

  it('recoverFromPreorder should return [1,2,5,3,null,6,null,4,null,7] for traversal = "1-2--3---4-5--6---7"', () => {
    const traversal = "1-2--3---4-5--6---7";
    const root = recoverFromPreorder(traversal);
    const result = treeNodeToArray(root);
    expect(result).toEqual([1, 2, 5, 3, null, 6, null, 4, null, 7]);
  });

  it('recoverFromPreorder should return [1,401,null,349,88,90] for traversal = "1-401--349---90--88"', () => {
    const traversal = "1-401--349---90--88";
    const root = recoverFromPreorder(traversal);
    const result = treeNodeToArray(root);
    expect(result).toEqual([1, 401, null, 349, 88, 90]);
  });
});
