import { NestedInteger } from "./nested-integer";

export class NestedIterator {
  flatList: number[];
  index: number;
  constructor(nestedList: NestedInteger[]) {
    this.flatList = [];
    this.index = 0;
    this.flatNestedList(nestedList, this.flatList);
  }

  flatNestedList(nestedList: NestedInteger[], flatList: number[]) {
    nestedList.forEach((item) => {
      if (item.isInteger()) {
        flatList.push(item.getInteger()!);
      } else {
        this.flatNestedList(item.getList(), flatList);
      }
    });
  }

  hasNext(): boolean {
    return this.index < this.flatList.length;
  }

  next(): number {
    return this.flatList[this.index++];
  }
}
