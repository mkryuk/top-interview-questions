export class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

export function nAryTreeFromArray(arr: (number | null)[]): Node | null {
  if (arr.length === 0 || arr[0] === null) {
    return null;
  }

  let root = new Node(arr[0]);
  let queue: Node[] = [root];
  let currentParent = queue.shift();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === null) {
      if (queue.length > 0) {
        // Move to the next parent in the queue
        currentParent = queue.shift();
      }
    } else {
      // Create a new child node
      let child = new Node(arr[i]!);
      // Add this child to the current parent
      if (currentParent) {
        currentParent.children.push(child);
      }
      // Add this child to the queue as it could be a parent to future nodes
      queue.push(child);
    }
  }

  return root;
}
