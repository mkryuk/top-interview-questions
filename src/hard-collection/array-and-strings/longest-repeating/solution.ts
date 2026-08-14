export function longestRepeating(s: string, queryCharacters: string, queryIndices: number[]): number[] {
  const chars = s.split("");
  const n = chars.length;
  const tree: Node[] = new Array(n * 4);

  build(tree, chars, 1, 0, n - 1);

  const result: number[] = [];

  for (let i = 0; i < queryIndices.length; i++) {
    const index = queryIndices[i];
    const character = queryCharacters[i];

    chars[index] = character;

    update(tree, 1, 0, n - 1, index, character);

    result.push(tree[1].best);
  }

  return result;
}

interface Node {
  leftChar: string;
  rightChar: string;
  prefix: number;
  suffix: number;
  best: number;
  length: number;
}

function build(tree: Node[], chars: string[], nodeIndex: number, left: number, right: number): void {
  if (left === right) {
    tree[nodeIndex] = createLeaf(chars[left]);
    return;
  }

  const middle = Math.floor((left + right) / 2);

  build(tree, chars, nodeIndex * 2, left, middle);
  build(tree, chars, nodeIndex * 2 + 1, middle + 1, right);

  tree[nodeIndex] = merge(tree[nodeIndex * 2], tree[nodeIndex * 2 + 1]);
}

function update(tree: Node[], nodeIndex: number, left: number, right: number, target: number, character: string): void {
  if (left === right) {
    tree[nodeIndex] = createLeaf(character);
    return;
  }

  const middle = Math.floor((left + right) / 2);

  if (target <= middle) {
    update(tree, nodeIndex * 2, left, middle, target, character);
  } else {
    update(tree, nodeIndex * 2 + 1, middle + 1, right, target, character);
  }

  tree[nodeIndex] = merge(tree[nodeIndex * 2], tree[nodeIndex * 2 + 1]);
}

function createLeaf(character: string): Node {
  return {
    leftChar: character,
    rightChar: character,
    prefix: 1,
    suffix: 1,
    best: 1,
    length: 1,
  };
}

function merge(left: Node, right: Node): Node {
  const result: Node = {
    leftChar: left.leftChar,
    rightChar: right.rightChar,
    prefix: left.prefix,
    suffix: right.suffix,
    best: Math.max(left.best, right.best),
    length: left.length + right.length,
  };

  if (left.rightChar !== right.leftChar) {
    return result;
  }

  // the repeating substring can cross the boundary
  result.best = Math.max(result.best, left.suffix + right.prefix);

  // the whole left segment can join the right prefix
  if (left.prefix === left.length) {
    result.prefix = left.length + right.prefix;
  }

  // the whole right segment can join the left suffix
  if (right.suffix === right.length) {
    result.suffix = right.length + left.suffix;
  }

  return result;
}
