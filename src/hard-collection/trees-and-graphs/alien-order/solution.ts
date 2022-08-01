export function alienOrder(words: string[]): string {
  const edges = new Map<string, string[]>();
  const depth = new Map<string, number>();

  // find all unique letters
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!edges.has(words[i][j])) {
        edges.set(words[i][j], []);
        depth.set(words[i][j], 0);
      }
    }
  }

  // find all edges
  for (let i = 0; i < words.length - 1; i++) {
    const current = words[i];
    const next = words[i + 1];
    // check that second word is not the prefix of the first
    if (current.length > next.length && current.startsWith(next)) {
      return "";
    }

    // find the first different letter
    // and add an edge from the first letter to the second
    for (let j = 0; j < Math.min(current.length, next.length); j++) {
      if (current[j] !== next[j]) {
        edges.get(current[j])!.push(next[j]);
        depth.set(next[j], depth.get(next[j])! + 1);
        break;
      }
    }
  }

  // find all roots
  const queue: string[] = [];
  depth.forEach((depth, letter) => {
    if (depth === 0) {
      queue.push(letter);
    }
  });

  // pass using BFS
  let result = "";
  while (queue.length) {
    const letter = queue.pop()!;
    result += letter;
    edges.get(letter)!.forEach((nextLetter) => {
      const newDepth = depth.get(nextLetter)! - 1;
      depth.set(nextLetter, newDepth);
      if (newDepth === 0) {
        queue.push(nextLetter);
      }
    });
  }

  return result.length < depth.size ? "" : result;
}
