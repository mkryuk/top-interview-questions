import { arrayToTreeNode } from "../common";
import { FindElements } from "./solution";

describe("Find Elements in a Contaminated Binary Tree", () => {
  it("FindElements should pass test 1", () => {
    const nodes = [-1, null, -1];
    const root = arrayToTreeNode(nodes);
    let findElements = new FindElements(root);
    expect(findElements.find(1)).toBeFalse();
    expect(findElements.find(2)).toBeTrue();
  });

  it("FindElements should pass test 1", () => {
    const nodes = [-1, -1, -1, -1, -1];
    const root = arrayToTreeNode(nodes);
    let findElements = new FindElements(root);
    expect(findElements.find(1)).toBeTrue();
    expect(findElements.find(3)).toBeTrue();
    expect(findElements.find(5)).toBeFalse();
  });

  it("FindElements should pass test 1", () => {
    const nodes = [-1, null, -1, -1, null, -1];
    const root = arrayToTreeNode(nodes);
    let findElements = new FindElements(root);
    expect(findElements.find(2)).toBeTrue();
    expect(findElements.find(3)).toBeFalse();
    expect(findElements.find(4)).toBeFalse();
    expect(findElements.find(5)).toBeTrue();
  });
});
