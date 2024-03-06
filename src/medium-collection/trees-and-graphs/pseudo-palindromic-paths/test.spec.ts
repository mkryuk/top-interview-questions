import { arrayToTreeNodeLevel } from "../common";
import { pseudoPalindromicPaths } from "./solution";

describe("Pseudo-Palindromic Paths in a Binary Tree:", () => {
  it("pseudoPalindromicPaths should return 2 for root = [2,3,1,3,1,null,1]", () => {
    const nodes = [2, 3, 1, 3, 1, null, 1];
    const root = arrayToTreeNodeLevel(nodes);
    const result = pseudoPalindromicPaths(root);
    expect(result).toEqual(2);
  });

  it("pseudoPalindromicPaths should return 1 for root = [2,1,1,1,3,null,null,null,null,null,1]", () => {
    const nodes = [2, 1, 1, 1, 3, null, null, null, null, null, 1];
    const root = arrayToTreeNodeLevel(nodes);
    const result = pseudoPalindromicPaths(root);
    expect(result).toEqual(1);
  });

  it("pseudoPalindromicPaths should return 1 for root = [9]", () => {
    const nodes = [9];
    const root = arrayToTreeNodeLevel(nodes);
    const result = pseudoPalindromicPaths(root);
    expect(result).toEqual(1);
  });

  it("pseudoPalindromicPaths should return 8 for root = [2,2,2,1,2,2,2,1,1,2,2,2,2,2,2]", () => {
    const nodes = [2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2];
    const root = arrayToTreeNodeLevel(nodes);
    const result = pseudoPalindromicPaths(root);
    expect(result).toEqual(8);
  });
});
