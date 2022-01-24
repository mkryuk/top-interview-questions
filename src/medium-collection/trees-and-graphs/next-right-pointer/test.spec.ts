import { connect } from "./solution";
import { arrayToNode, nodeToArray } from "../common";

it("connect should return [1,#,2,3,#,4,5,6,7,#] for root = [1,2,3,4,5,6,7]", function () {
  const root = [1, 2, 3, 4, 5, 6, 7];
  const rootNode = arrayToNode(root);
  const resultNode = connect(rootNode);
  const resultArray = nodeToArray(resultNode);
  expect(resultArray).toEqual([1, "#", 2, 3, "#", 4, 5, 6, 7, "#"]);
});

it("connect should return [] for root = []", function () {
  const root: number[] = [];
  const rootNode = arrayToNode(root);
  const resultNode = connect(rootNode);
  const resultArray = nodeToArray(resultNode);
  expect(resultArray).toEqual([]);
});
