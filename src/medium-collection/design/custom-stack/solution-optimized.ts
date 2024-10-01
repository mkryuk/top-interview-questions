export class CustomStack {
  private maxSize: number;
  private stack: number[];
  private incStack: number[];
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.stack = [];
    this.incStack = [];
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
      this.incStack.push(0);
    }
  }

  pop(): number {
    if (this.stack.length === 0) {
      return -1;
    }
    const i = this.incStack.length - 1;
    if (i > 0) {
      this.incStack[i - 1] += this.incStack[i];
    }
    return this.stack.pop()! + this.incStack.pop()!;
  }

  increment(k: number, val: number): void {
    const idx = Math.min(k, this.stack.length) - 1;
    if (idx >= 0) {
      this.incStack[idx] += val;
    }
  }
}
