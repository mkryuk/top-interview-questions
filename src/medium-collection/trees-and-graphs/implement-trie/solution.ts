export class Trie {
  readonly keyLength: number = 26;
  children: Trie[];
  lastNode: boolean;
  constructor() {
    this.children = new Array(this.keyLength);
    this.lastNode = false;
  }

  insert(word: string): void {
    let node: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const idx = word[i].charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[idx]) {
        node.children[idx] = new Trie();
      }
      node = node.children[idx];
    }
    node.lastNode = true;
  }

  search(word: string): boolean {
    let node: Trie = this;
    for (let i = 0; i < word.length; i++) {
      const idx = word[i].charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[idx]) {
        return false;
      }
      node = node.children[idx];
    }
    return node.lastNode;
  }

  startsWith(prefix: string): boolean {
    let node: Trie = this;
    for (let i = 0; i < prefix.length; i++) {
      const idx = prefix[i].charCodeAt(0) - "a".charCodeAt(0);
      if (!node.children[idx]) {
        return false;
      }
      node = node.children[idx];
    }
    return true;
  }

  isEmpty() {
    // If there are no children
    return !this.children.some((n) => n !== undefined);
  }

  delete(word: string) {
    this.deleteWord(this, word, 0);
  }

  // return true if node should be deleted
  private deleteWord(node: Trie, word: string, depth: number): boolean {
    if (node === undefined) {
      return true;
    }

    if (depth === word.length) {
      if (node.lastNode) {
        node.lastNode = false;
      }
      if (node.isEmpty()) {
        return true;
      }
      return false;
    }

    const index = word[depth].charCodeAt(0) - "a".charCodeAt(0);
    if (this.deleteWord(node.children[index], word, depth + 1)) {
      delete node.children[index];
    }

    // If node does not have any child (its only child got
    // deleted), and it is not end of another word.
    if (node.isEmpty() && node.lastNode == false) {
      return true;
    }

    return false;
  }
}
