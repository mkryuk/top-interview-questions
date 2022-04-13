export class Vector2D {
  vec: number[][];
  inner: number = 0;
  outer: number = 0;

  constructor(vec: number[][]) {
    this.vec = vec;
  }

  next(): number {
    if (!this.hasNext()) {
      throw new Error("No next item");
    }
    return this.vec[this.outer][this.inner++];
  }

  goToNextItem() {
    while (
      this.outer < this.vec.length &&
      this.inner === this.vec[this.outer].length
    ) {
      this.outer++;
      this.inner = 0;
    }
  }

  hasNext(): boolean {
    this.goToNextItem();
    return (
      this.outer < this.vec.length && this.inner < this.vec[this.outer].length
    );
  }
}
