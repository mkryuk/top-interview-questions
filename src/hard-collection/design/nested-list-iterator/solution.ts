import { NestedInteger } from "./nested-integer";

class NestedIterator {
  constructor(nestedList: NestedInteger[]) {}

  hasNext(): boolean {
    return false;
  }

  next(): number {
    return 0;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
