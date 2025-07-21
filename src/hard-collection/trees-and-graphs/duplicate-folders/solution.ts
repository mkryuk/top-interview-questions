class Node {
  name: string;
  children: Map<string, Node> = new Map();
  // canonical signature of the subtree
  sig: string = "";
  deleted: boolean = false;

  constructor(name: string) {
    this.name = name;
  }
}

export function deleteDuplicateFolder(paths: string[][]): string[][] {
  //build the trie
  // virtual root
  const root = new Node("");

  for (const path of paths) {
    let cur = root;
    for (const part of path) {
      if (!cur.children.has(part)) {
        cur.children.set(part, new Node(part));
      }
      cur = cur.children.get(part)!;
    }
  }

  // compute signatures and count them
  const freq = new Map<string, number>();

  function dfsSig(node: Node): string {
    if (node.children.size === 0) {
      // leaf signature (not counted)
      node.sig = "()";
      return node.sig;
    }

    // sort children by name for a canonical ordering
    const pieces: string[] = [];
    const sorted = Array.from(node.children.values()).sort((a, b) => a.name.localeCompare(b.name));

    for (const child of sorted) {
      pieces.push(child.name + dfsSig(child));
    }

    node.sig = "(" + pieces.join("") + ")";

    // only non-leaf signatures participate in duplication
    freq.set(node.sig, (freq.get(node.sig) ?? 0) + 1);
    return node.sig;
  }

  // skip virtual root
  for (const child of root.children.values()) dfsSig(child);

  // mark duplicate sub-trees
  function dfsMark(node: Node, inheritedDeletion = false): void {
    // if parent was already deleted, the whole subtree is deleted as well
    if (inheritedDeletion) {
      node.deleted = true;
    } else if (node.children.size > 0 && freq.get(node.sig)! > 1) {
      node.deleted = true;
    }

    for (const child of node.children.values()) {
      dfsMark(child, node.deleted);
    }
  }

  for (const child of root.children.values()) dfsMark(child);

  // collect surviving paths
  const result: string[][] = [];

  function dfsCollect(node: Node, path: string[]): void {
    for (const [name, child] of node.children) {
      if (child.deleted) continue;

      const newPath = [...path, name];
      result.push(newPath);
      dfsCollect(child, newPath);
    }
  }

  dfsCollect(root, []);
  return result;
}
