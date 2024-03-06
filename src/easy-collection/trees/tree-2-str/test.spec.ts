import { arrayToTreeNodeLevel } from "../common";
import { tree2str } from "./solution";

describe("Construct String from Binary Tree:", () => {
  it('tree2str should return "1(2(4))(3)" for root = [1,2,3,4]', () => {
    const nodes = [1, 2, 3, 4];
    const root = arrayToTreeNodeLevel(nodes);
    const result = tree2str(root);
    expect(result).toEqual("1(2(4))(3)");
  });

  it('tree2str should return "1(2()(4))(3)" for root = [1,2,3,null,4]', () => {
    const nodes = [1, 2, 3, null, 4];
    const root = arrayToTreeNodeLevel(nodes);
    const result = tree2str(root);
    expect(result).toEqual("1(2()(4))(3)");
  });
});
