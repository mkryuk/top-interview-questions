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
}
