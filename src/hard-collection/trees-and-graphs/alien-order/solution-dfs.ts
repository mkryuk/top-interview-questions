export function alienOrder(words: string[]): string {
  const reverseEdges = new Map<string, string[]>();
  const visited = new Map<string, boolean>();
  // find all unique letters
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (!reverseEdges.has(words[i][j])) {
        reverseEdges.set(words[i][j], []);
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
    // and add a reverse edge from the next letter to the previous
    // for instance b -> a means that a should be before b
    for (let j = 0; j < Math.min(current.length, next.length); j++) {
      if (current[j] !== next[j]) {
        reverseEdges.get(next[j])!.push(current[j]);
        break;
      }
    }
  }

  const result: string[] = [];
  const letters = Array.from(reverseEdges.keys());
  // pass using DFS
  for (let i = 0; i < letters.length; i++) {
    if (!dfs(letters[i], visited, reverseEdges, result)) {
      return "";
    }
  }

  return result.join("");
}

function dfs(
  letter: string,
  visited: Map<string, boolean>,
  reverseEdges: Map<string, string[]>,
  result: string[],
): boolean {
  if (visited.has(letter)) {
    // if already visited
    // false returned if there is a cycle
    return visited.get(letter)!;
  }
  visited.set(letter, false);
  // take all previous letters
  let prevLetters = reverseEdges.get(letter)!;
  for (let i = 0; i < prevLetters.length; i++) {
    if (!dfs(prevLetters[i], visited, reverseEdges, result)) {
      return false;
    }
  }
  visited.set(letter, true);
  result.push(letter);
  return true;
}
