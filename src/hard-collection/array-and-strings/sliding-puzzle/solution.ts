export function slidingPuzzle(board: number[][]): number {
  let initialState = board.flat().join("");
  let targetState = "123450";
  let neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];
  let queue: [string, number][] = [[initialState, 0]];
  let visited = new Set<string>();
  visited.add(initialState);
  while (queue.length > 0) {
    const [state, steps] = queue.shift()!;
    if (state === targetState) {
      return steps;
    }
    const zeroIndex = state.indexOf("0");
    for (const neighbor of neighbors[zeroIndex]) {
      const newBoard = state.split("");
      [newBoard[zeroIndex], newBoard[neighbor]] = [newBoard[neighbor], newBoard[zeroIndex]];
      const newState = newBoard.join("");
      if (!visited.has(newState)) {
        visited.add(newState);
        queue.push([newState, steps + 1]);
      }
    }
  }
  return -1;
}
