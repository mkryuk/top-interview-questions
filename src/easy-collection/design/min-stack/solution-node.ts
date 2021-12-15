export class MinStack {
  constructor(private head: Node | null = null) {}

  push(val: number): void {
    let min;
    if (this.head === null) {
      min = val;
    } else {
      min = Math.min(this.head.min, val);
    }
    const node = new Node(val, min);
    node.next = this.head;
    this.head = node;
  }

  pop(): void {
    this.head = this.head?.next ?? null;
  }

  top(): number | undefined {
    return this.head?.val;
  }

  getMin(): number | undefined {
    return this.head?.min;
  }
}

class Node {
  public next: Node | null = null;
  constructor(public val: number, public min: number) {}
}
