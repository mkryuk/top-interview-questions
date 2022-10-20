export class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  isSingleInteger: boolean;
  value?: number;
  list?: NestedInteger[];
  constructor(value?: number) {
    if (value !== undefined) {
      this.value = value;
      this.isSingleInteger = true;
    } else {
      this.list = [];
      this.isSingleInteger = false;
    }
  }

  //  Return true if this NestedInteger holds a single integer, rather than a nested list.
  isInteger(): boolean {
    return this.isSingleInteger;
  }

  //  Return the single integer that this NestedInteger holds, if it holds a single integer
  //  Return null if this NestedInteger holds a nested list
  getInteger(): number | null {
    return this.isSingleInteger ? this.value! : null;
  }

  //  Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {
    this.value = value;
    this.isSingleInteger = true;
  }

  //  Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {
    if (this.isSingleInteger) {
      this.list = [];
      this.list?.push(new NestedInteger(this.value));
      this.value = undefined;
      this.isSingleInteger = false;
    }
    this.list?.push(elem);
  }

  //  Return the nested list that this NestedInteger holds,
  //  or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] {
    return this.isSingleInteger ? this.list! : [];
  }
}
