import { NestedInteger } from "./nested-integer";

export class NestedIterator {
  stack: NestedInteger[] = [];
  constructor(nestedList: NestedInteger[]) {
    this.stack = [];
    this.addToStack(nestedList);
  }

  hasNext(): boolean {
    while (this.stack.length > 0) {
      const top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return true;
      }
      this.stack.pop()!;
      this.addToStack(top.getList());
    }
    return false;
  }

  next(): number {
    return this.stack.pop()!.getInteger()!;
  }

  addToStack(list: NestedInteger[]) {
    for (let i = list.length - 1; i >= 0; i--) {
      this.stack.push(list[i]);
    }
  }
}
