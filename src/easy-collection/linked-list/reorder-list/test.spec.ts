import { arrayToList, listToArray } from "../common";
import { reorderList } from "./solution";

describe("Reorder List", () => {
  it("reorderList should return [1,4,2,3] for head = [1,2,3,4]", () => {
    const nodes = [1, 2, 3, 4];
    const head = arrayToList(nodes);
    reorderList(head);
    const result = listToArray(head);
    expect(result).toEqual([1, 4, 2, 3]);
  });

  it("reorderList should return [1,5,2,4,3] for head = [1,2,3,4,5]", () => {
    const nodes = [1, 2, 3, 4, 5];
    const head = arrayToList(nodes);
    reorderList(head);
    const result = listToArray(head);
    expect(result).toEqual([1, 5, 2, 4, 3]);
  });
});
