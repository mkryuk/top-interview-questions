import { arrayToList } from "../common";
import { pairSum } from "./solution-reverse";

describe("Maximum Twin Sum of a Linked List:", () => {
  it("pairSum should return 6 for head = [5,4,2,1]", () => {
    const nodes = [5, 4, 2, 1];
    const head = arrayToList(nodes);
    const result = pairSum(head);
    expect(result).toEqual(6);
  });

  it("pairSum should return 7 for head = [4,2,2,3]", () => {
    const nodes = [4, 2, 2, 3];
    const head = arrayToList(nodes);
    const result = pairSum(head);
    expect(result).toEqual(7);
  });

  it("pairSum should return 100001 for head = [1,100000]", () => {
    const nodes = [1, 100000];
    const head = arrayToList(nodes);
    const result = pairSum(head);
    expect(result).toEqual(100001);
  });
});
