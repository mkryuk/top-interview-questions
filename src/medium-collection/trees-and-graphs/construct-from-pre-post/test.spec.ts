import { treeNodeToArray } from "../common";
import { constructFromPrePost } from "./solution";

describe("Construct Binary Tree from Preorder and Postorder Traversal", () => {
  it("constructFromPrePost should return [1,2,3,4,5,6,7] for preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]", () => {
    const preorder = [1, 2, 4, 5, 3, 6, 7];
    const postorder = [4, 5, 2, 6, 7, 3, 1];
    const nodes = constructFromPrePost(preorder, postorder);
    const result = treeNodeToArray(nodes);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("constructFromPrePost should return [1] for preorder = [1], postorder = [1]", () => {
    const preorder = [1];
    const postorder = [1];
    const nodes = constructFromPrePost(preorder, postorder);
    const result = treeNodeToArray(nodes);
    expect(result).toEqual([1]);
  });
});
