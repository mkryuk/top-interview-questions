import { arrayToTreeNode } from "../common";
import { findBottomLeftValue } from "./solution";

describe("Find Bottom Left Tree Value:", () => {
  it("findBottomLeftValue should return 1 for root = [2,1,3]", () => {
    const nodes = [2, 1, 3];
    const root = arrayToTreeNode(nodes);
    const result = findBottomLeftValue(root);
    expect(result).toEqual(1);
  });

  it("findBottomLeftValue should return 7 for root = [1,2,3,4,null,5,6,null,null,7]", () => {
    const nodes = [1, 2, 3, 4, null, 5, 6, null, null, 7];
    const root = arrayToTreeNode(nodes);
    const result = findBottomLeftValue(root);
    expect(result).toEqual(7);
  });
});
