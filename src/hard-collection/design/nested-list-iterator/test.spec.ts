import { NestedInteger } from "./nested-integer";
import { NestedIterator } from "./solution";

it("NestedIterator should return [1,1,2,1,1] for nestedList = [[1,1],2,[1,1]]", () => {
  const nestedListArray: any[] = [[1, 1], 2, [1, 1]];
  const nestedList = arrayToNestedList(nestedListArray);
  var nestedIterator = new NestedIterator(nestedList.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([1, 1, 2, 1, 1]);
});

it("NestedIterator should return [1,4,6] for nestedList = [1,[4,[6]]]", () => {
  const nestedListArray: any[] = [1, [4, [6]]];
  const nestedList = arrayToNestedList(nestedListArray);
  var nestedIterator = new NestedIterator(nestedList.getList());
  var result: number[] = [];
  while (nestedIterator.hasNext()) result.push(nestedIterator.next());
  expect(result).toEqual([1, 4, 6]);
});

function arrayToNestedList(item: any): NestedInteger {
  var result: NestedInteger = new NestedInteger();
  if (Array.isArray(item)) {
    for (let i = 0; i < item.length; i++) {
      const ni = arrayToNestedList(item[i]);
      result.add(ni);
    }
  } else {
    result.setInteger(item);
  }
  return result;
}
