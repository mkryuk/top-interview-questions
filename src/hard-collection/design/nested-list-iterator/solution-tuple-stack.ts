import { NestedInteger } from "./nested-integer";

export class NestedIterator {
  tupleStack: [NestedInteger[], number][];
  get lastTupleStackItem() {
    return this.tupleStack[this.tupleStack.length - 1];
  }
  constructor(nestedList: NestedInteger[]) {
    this.tupleStack = [[nestedList, 0]];
  }

  toNextInteger() {
    while (this.tupleStack.length > 0) {
      const [currentList, currentIndex] = this.lastTupleStackItem;

      // If the top list is used up, pop it and its index.
      if (currentList.length === currentIndex) {
        this.tupleStack.pop();
        continue;
      }

      // Otherwise, if it's already an integer, we don't need
      // to do anything.
      if (currentList[currentIndex].isInteger()) {
        break;
      }

      // Otherwise, it must be a list. We need to increment the index
      // on the previous list, and add the new list.
      const newList = currentList[currentIndex].getList();
      this.lastTupleStackItem[1] += 1; // Increment old
      this.tupleStack.push([newList, 0]);
    }
  }

  next(): number {
    this.toNextInteger();
    const [currentList, currentIndex] = this.lastTupleStackItem;
    this.lastTupleStackItem[1] += 1;
    return currentList[currentIndex].getInteger()!;
  }

  hasNext(): boolean {
    this.toNextInteger();
    return this.tupleStack.length > 0;
  }
}
