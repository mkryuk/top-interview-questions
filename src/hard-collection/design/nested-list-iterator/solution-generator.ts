import { NestedInteger } from "./nested-integer";

export class NestedIterator {
  generator;
  peeked: number | null = null;

  constructor(nestedList: NestedInteger[]) {
    function* intGenerator(nestedList: NestedInteger[]): any {
      for (const nestedInteger of nestedList) {
        if (nestedInteger.isInteger()) {
          yield nestedInteger.getInteger();
        } else {
          yield* intGenerator(nestedInteger.getList());
        }
      }
    }
    this.generator = intGenerator(nestedList);
  }

  hasNext(): boolean {
    if (this.peeked !== null) return true;

    const { value, done } = this.generator.next();
    if (done) {
      return false;
    }
    this.peeked = value;
    return true;
  }

  next(): number {
    const nextValue: number = this.peeked!;
    this.peeked = null;
    return nextValue;
  }
}
