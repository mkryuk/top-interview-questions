export class MinStack {
  constructor(private stack: { val: number; min: number }[] = []) {}

  push(val: number): void {
    const min = Math.min(this.getMin() ?? Infinity, val);
    this.stack.push({ val, min });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1]?.min;
  }
}
