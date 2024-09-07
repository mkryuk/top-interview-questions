export function validateBinaryTreeNodes(n: number, leftChild: number[], rightChild: number[]): boolean {
  let map = new Array(n).fill(0);
  for (let i = 0; i < leftChild.length; i++) {
    if (leftChild[i] !== -1) {
      map[leftChild[i]]++;
    }
    if (rightChild[i] !== -1) {
      map[rightChild[i]]++;
    }
    if (map[leftChild[i]] > 1) {
      return false;
    }
    if (map[rightChild[i]] > 1) {
      return false;
    }
  }
  let zeroes = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i] === 0) {
      zeroes++;
    }
  }
  if (zeroes !== 1) {
    return false;
  }
  // find the root
  let root = map.indexOf(0);
  let visited = new Array(n).fill(0);
  dfs(root, leftChild, rightChild, visited);
  // check if we have visited all nodes
  for (let i = 0; i < visited.length; i++) {
    if (visited[i] !== 1) {
      return false;
    }
  }
  return true;
}

function dfs(node: number, leftChild: number[], rightChild: number[], visited: number[]) {
  if (visited[node] > 1) {
    return;
  }
  visited[node]++;
  if (leftChild[node] !== -1) {
    dfs(leftChild[node], leftChild, rightChild, visited);
  }
  if (rightChild[node] !== -1) {
    dfs(rightChild[node], leftChild, rightChild, visited);
  }
}
