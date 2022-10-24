import { NestedInteger } from "./nested-integer";
import { NestedIterator } from "./solution-generator";

it("NestedIterator should return [1,1,2,1,1] for nestedList = [[1,1],2,[1,1]]", () => {
  const nestedListArray: any[] = [[1, 1], 2, [1, 1]];
  const nestedInteger = arrayToNestedInteger(nestedListArray);
  var nestedIterator = new NestedIterator(nestedInteger.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([1, 1, 2, 1, 1]);
});

it("NestedIterator should return [1,4,6] for nestedList = [1,[4,[6]]]", () => {
  const nestedListArray: any[] = [1, [4, [6]]];
  const nestedInteger = arrayToNestedInteger(nestedListArray);
  var nestedIterator = new NestedIterator(nestedInteger.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([1, 4, 6]);
});

it("NestedIterator should return [1,2,3,4,5,6,7] for nestedList = [1,[2,3,[4],[[5],6]],7]", () => {
  const nestedListArray: any[] = [1, [2, 3, [4], [[5], 6]], 7];
  const nestedInteger = arrayToNestedInteger(nestedListArray);
  var nestedIterator = new NestedIterator(nestedInteger.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it("NestedIterator should return [] for nestedList = [[]]", () => {
  const nestedListArray: any[] = [[]];
  const nestedInteger = arrayToNestedInteger(nestedListArray);
  var nestedIterator = new NestedIterator(nestedInteger.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([]);
});

function arrayToNestedInteger(item: any): NestedInteger {
  var result: NestedInteger = new NestedInteger();
  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i++) {
      const ni = arrayToNestedInteger(item[i]);
      result.add(ni);
    }
  } else {
    result.setInteger(item);
  }
  return result;
}
