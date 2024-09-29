export class AllOne {
  private head: Node | null;
  private tail: Node | null;
  private stringsMap: Map<string, Node>;
  constructor() {
    this.head = null;
    this.tail = null;
    this.stringsMap = new Map();
  }

  inc(key: string): void {
    if (!this.stringsMap.has(key)) {
      if (this.head === null || this.head.count !== 1) {
        const newNode = new Node(1);
        newNode.keys.add(key);
        newNode.next = this.head;

        if (this.head !== null) {
          this.head.prev = newNode;
        }
        this.head = newNode;

        if (this.tail === null) {
          this.tail = newNode;
        }
        this.stringsMap.set(key, newNode);
      } else {
        this.head.keys.add(key);
        this.stringsMap.set(key, this.head);
      }
    } else {
      const node = this.stringsMap.get(key)!;
      let nextNode = node.next;
      if (nextNode === null || nextNode.count !== node.count + 1) {
        const newNode = new Node(node.count + 1);
        newNode.keys.add(key);
        newNode.prev = node;
        newNode.next = nextNode;

        if (nextNode !== null) {
          nextNode.prev = newNode;
        }
        node.next = newNode;

        if (this.tail === node) {
          this.tail = newNode;
        }
        nextNode = newNode;
      } else {
        nextNode.keys.add(key);
      }
      this.stringsMap.set(key, nextNode);
      node.keys.delete(key);
      if (node.keys.size === 0) {
        this.removeNode(node);
      }
    }
  }

  dec(key: string): void {
    if (!this.stringsMap.has(key)) {
      return;
    }

    const node = this.stringsMap.get(key)!;
    if (node.count === 1) {
      this.stringsMap.delete(key);
    } else {
      let prevNode = node.prev;
      if (prevNode === null || prevNode.count !== node.count - 1) {
        const newNode = new Node(node.count - 1);
        newNode.keys.add(key);
        newNode.next = node;
        newNode.prev = prevNode;

        if (prevNode !== null) {
          prevNode.next = newNode;
        }

        node.prev = newNode;

        if (this.head === node) {
          this.head = newNode;
        }

        prevNode = newNode;
      } else {
        prevNode.keys.add(key);
      }
      this.stringsMap.set(key, prevNode);
    }

    node.keys.delete(key);
    if (node.keys.size === 0) {
      this.removeNode(node);
    }
  }

  getMaxKey(): string {
    if (this.tail === null || this.tail.keys.size === 0) {
      return "";
    }
    return this.tail.keys.values().next().value;
  }

  getMinKey(): string {
    if (this.head === null || this.head.keys.size === 0) {
      return "";
    }
    return this.head.keys.values().next().value;
  }

  private removeNode(node: Node): void {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }
}

class Node {
  count: number;
  prev: Node | null;
  next: Node | null;
  keys: Set<string>;

  constructor(count: number) {
    this.count = count;
    this.prev = null;
    this.next = null;
    this.keys = new Set();
  }
}
