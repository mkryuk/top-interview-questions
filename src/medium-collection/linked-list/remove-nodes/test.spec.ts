import { arrayToList, listToArray } from "../common";
import { removeNodes } from "./solution";

describe("Remove Nodes From Linked List", () => {
  it("removeNodes should return [13,8] for head = [5,2,13,3,8]", () => {
    const nodes = [5, 2, 13, 3, 8];
    const head = arrayToList(nodes);
    const root = removeNodes(head);
    const result = listToArray(root);
    expect(result).toEqual([13, 8]);
  });

  it("removeNodes should return [1,1,1,1] for head = [1,1,1,1]", () => {
    const nodes = [1, 1, 1, 1];
    const head = arrayToList(nodes);
    const root = removeNodes(head);
    const result = listToArray(root);
    expect(result).toEqual([1, 1, 1, 1]);
  });
});
