export class Vector2D {
  stack: number[] = [];
  constructor(vec: number[][]) {
    for (let i = 0; i < vec.length; i++) {
      this.stack = [...this.stack, ...vec[i]];
    }
  }

  next(): number {
    return this.stack.shift() ?? 0;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
