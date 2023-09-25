import { arrayToTreeNode } from "../common";
import { getDirections } from "./solution";

describe("Step-By-Step Directions From a Binary Tree Node to Another:", () => {
  it('getDirections should return "UURL" for root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6', () => {
    const nodes = [5, 1, 2, 3, null, 6, 4];
    const startValue = 3;
    const destValue = 6;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("UURL");
  });

  it('getDirections should return "L" for root = [2,1], startValue = 2, destValue = 1', () => {
    const nodes = [2, 1];
    const startValue = 2;
    const destValue = 1;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("L");
  });

  it('getDirections should return "R" for root = [2,null,1], startValue = 2, destValue = 1', () => {
    const nodes = [2, null, 1];
    const startValue = 2;
    const destValue = 1;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("R");
  });

  it('getDirections should return "U" for root = [5,1,2,3,null,6,4], startValue = 3, destValue = 1', () => {
    const nodes = [5, 1, 2, 3, null, 6, 4];
    const startValue = 3;
    const destValue = 1;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("U");
  });

  it('getDirections should return "UULL" for root = [5,1,2,3,null,6,4], startValue = 4, destValue = 3', () => {
    const nodes = [5, 1, 2, 3, null, 6, 4];
    const startValue = 4;
    const destValue = 3;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("UULL");
  });

  it('getDirections should return "LL" for root = [1,2,3,4,null,5,6], startValue = 1, destValue = 4', () => {
    const nodes = [1, 2, 3, 4, null, 5, 6];
    const startValue = 1;
    const destValue = 4;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("LL");
  });

  it('getDirections should return "RR" for root = [1,2,3,4,null,5,6], startValue = 1, destValue = 6', () => {
    const nodes = [1, 2, 3, 4, null, 5, 6];
    const startValue = 1;
    const destValue = 6;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("RR");
  });

  it('getDirections should return "RRR" for root = [1,2,3,4,5,6,7], startValue = 6, destValue = 7', () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7];
    const startValue = 6;
    const destValue = 7;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("UR");
  });

  it('getDirections should return "RRR" for root = [1,2,3,4,5,6,7], startValue = 7, destValue = 6', () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7];
    const startValue = 7;
    const destValue = 6;
    const root = arrayToTreeNode(nodes);
    const result = getDirections(root, startValue, destValue);
    expect(result).toEqual("UL");
  });
});
