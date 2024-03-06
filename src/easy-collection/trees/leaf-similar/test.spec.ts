import { arrayToTreeNodeLevel } from "../common";
import { leafSimilar } from "./solution";

describe("Leaf-Similar Trees:", () => {
  it("leafSimilar should return true for root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]", () => {
    const nodes1 = [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4];
    // prettier-ignore
    const nodes2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8];
    const root1 = arrayToTreeNodeLevel(nodes1);
    const root2 = arrayToTreeNodeLevel(nodes2);
    const result = leafSimilar(root1, root2);
    expect(result).toBeTrue();
  });

  it("leafSimilar should return false for root1 = [1,2,3], root2 = [1,3,2]", () => {
    const nodes1 = [1, 2, 3];
    const nodes2 = [1, 3, 2];
    const root1 = arrayToTreeNodeLevel(nodes1);
    const root2 = arrayToTreeNodeLevel(nodes2);
    const result = leafSimilar(root1, root2);
    expect(result).toBeFalse();
  });
});
