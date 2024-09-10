import { arrayToList, listToArray } from "../common";
import { insertGreatestCommonDivisors } from "./solution";

describe("Insert Greatest Common Divisors in Linked List", () => {
  it("insertGreatestCommonDivisors should return [18,6,6,2,10,1,3] for head = [18,6,10,3]", () => {
    const nodes = [18, 6, 10, 3];
    const head = arrayToList(nodes);
    const result = insertGreatestCommonDivisors(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([18, 6, 6, 2, 10, 1, 3]);
  });

  it("insertGreatestCommonDivisors should return [7] for head = [7]", () => {
    const nodes = [7];
    const head = arrayToList(nodes);
    const result = insertGreatestCommonDivisors(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([7]);
  });
});
