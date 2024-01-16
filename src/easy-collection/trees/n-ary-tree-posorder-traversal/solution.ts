export function postorder(root: Node | null): number[] {
  return [];
}

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
  let queue: { node: Node; childCount: number }[] = [
    { node: root, childCount: 0 },
  ];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === null) {
      queue.shift();
      continue;
    }

    let newNode = new Node(arr[i]!);
    if (queue[0]) {
      queue[0].node.children.push(newNode);
      queue[0].childCount++;

      // Move to the next parent node in the queue if all its children are accounted for
      if (queue[0].childCount === queue[0].node.children.length) {
        queue.shift();
      }
    }
    queue.push({ node: newNode, childCount: 0 });
  }

  return root;
}
