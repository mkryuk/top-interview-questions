import { arrayToTreeNode } from "../common";
import { smallestFromLeaf } from "./solution";

describe("Smallest String Starting From Leaf", () => {
  it('smallestFromLeaf should return "dba" for root = [0,1,2,3,4,3,4]', () => {
    const nodes = [0, 1, 2, 3, 4, 3, 4];
    const root = arrayToTreeNode(nodes);
    const result = smallestFromLeaf(root);
    expect(result).toEqual("dba");
  });

  it('smallestFromLeaf should return "adz" for root = [25,1,3,1,3,0,2]', () => {
    const nodes = [25, 1, 3, 1, 3, 0, 2];
    const root = arrayToTreeNode(nodes);
    const result = smallestFromLeaf(root);
    expect(result).toEqual("adz");
  });

  it('smallestFromLeaf should return "abc" for root = [2,2,1,null,1,0,null,0]', () => {
    const nodes = [2, 2, 1, null, 1, 0, null, 0];
    const root = arrayToTreeNode(nodes);
    const result = smallestFromLeaf(root);
    expect(result).toEqual("abc");
  });
});
