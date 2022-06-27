import { arrayToNode, nodeToArray } from "../common";
import { copyRandomList } from "./solution-o1-space";

it("copyRandomList should return [[7,null],[13,0],[11,4],[10,2],[1,0]] for head = [[7,null],[13,0],[11,4],[10,2],[1,0]]", () => {
  const headArr = [
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ];
  const head = arrayToNode(headArr);
  const result = copyRandomList(head);
  expect(nodeToArray(result)).toEqual([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ]);
});

it("copyRandomList should return [[1,1],[2,1]] for head = [[1,1],[2,1]]", () => {
  const headArr = [
    [1, 1],
    [2, 1],
  ];
  const head = arrayToNode(headArr);
  const result = copyRandomList(head);
  expect(nodeToArray(result)).toEqual([
    [1, 1],
    [2, 1],
  ]);
});

it("copyRandomList should return [[3,null],[3,0],[3,null]] for head = [[3,null],[3,0],[3,null]]", () => {
  const headArr = [
    [3, null],
    [3, 0],
    [3, null],
  ];
  const head = arrayToNode(headArr);
  const result = copyRandomList(head);
  expect(nodeToArray(result)).toEqual([
    [3, null],
    [3, 0],
    [3, null],
  ]);
});
