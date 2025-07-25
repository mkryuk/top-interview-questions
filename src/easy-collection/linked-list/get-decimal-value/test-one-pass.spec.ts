import { arrayToList } from "../common";
import { getDecimalValue } from "./solution-one-pass";

describe("1290. Convert Binary Number in a Linked List to Integer", () => {
  it("getDecimalValue should return 5 for head = [1,0,1]", () => {
    const nodes = [1, 0, 1];
    const head = arrayToList(nodes);
    const result = getDecimalValue(head);
    expect(result).toEqual(5);
  });

  it("getDecimalValue should return 0 for head = [0]", () => {
    const nodes = [0];
    const head = arrayToList(nodes);
    const result = getDecimalValue(head);
    expect(result).toEqual(0);
  });

  it("getDecimalValue should return 18880 for head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]", () => {
    const nodes = [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    const head = arrayToList(nodes);
    const result = getDecimalValue(head);
    expect(result).toEqual(18880);
  });
});
