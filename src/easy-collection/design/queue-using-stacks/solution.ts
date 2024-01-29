export class MyQueue {
  readStack: number[] = [];
  writeStack: number[] = [];
  constructor() {}

  push(x: number): void {
    this.writeStack.push(x);
  }

  pop(): number {
    this.requeueStacks();
    return this.readStack.pop()!;
  }

  peek(): number {
    this.requeueStacks();
    return this.readStack[this.readStack.length - 1];
  }

  empty(): boolean {
    return this.readStack.length === 0 && this.writeStack.length === 0;
  }

  requeueStacks() {
    if (this.readStack.length === 0) {
      while (this.writeStack.length > 0) {
        this.readStack.push(this.writeStack.pop()!);
      }
    }
  }
}
