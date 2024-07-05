import { arrayToList, listToArray } from "../common";
import { nodesBetweenCriticalPoints } from "./solution";

describe("Find the Minimum and Maximum Number of Nodes Between Critical Points", () => {
  it("nodesBetweenCriticalPoints should return [-1,-1] for head = [3,1]", () => {
    const nodes = [3, 1];
    const head = arrayToList(nodes);
    const result = nodesBetweenCriticalPoints(head);
    expect(result).toEqual([-1, -1]);
  });

  it("nodesBetweenCriticalPoints should return [1,3] for head = [5,3,1,2,5,1,2]", () => {
    const nodes = [5, 3, 1, 2, 5, 1, 2];
    const head = arrayToList(nodes);
    const result = nodesBetweenCriticalPoints(head);
    expect(result).toEqual([1, 3]);
  });

  it("nodesBetweenCriticalPoints should return [3,3] for head = [1,3,2,2,3,2,2,2,7]", () => {
    const nodes = [1, 3, 2, 2, 3, 2, 2, 2, 7];
    const head = arrayToList(nodes);
    const result = nodesBetweenCriticalPoints(head);
    expect(result).toEqual([3, 3]);
  });
});
