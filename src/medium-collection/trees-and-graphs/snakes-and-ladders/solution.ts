export function snakesAndLadders(board: number[][]): number {
  // The number of rows and columns in the board
  const n = board.length;

  // An array to store the coordinates of each cell in the board
  let cells: [number, number][] = new Array(n * n + 1);

  // A variable to keep track of the current cell label
  let label = 1;

  // An array to store the columns of the board
  let columns: number[] = new Array(n);

  // Fill the columns array with the index of the columns
  for (let i = 0; i < n; i++) {
    columns[i] = i;
  }

  // Iterate through the rows and columns of the board, starting from the last row
  for (let row = n - 1; row >= 0; row--) {
    for (let column of columns) {
      // Assign the current cell label to the corresponding coordinates
      cells[label++] = [row, column];
    }
    // Reverse the order of the columns for the next row
    columns.reverse();
  }

  // An array to store the distance from the start cell (1) to each other cell in the board
  let dist = new Array(n * n + 1).fill(-1);

  // A queue to keep track of the cells to be visited
  let q = new Array<number>();

  // Set the distance of the start cell to 0
  dist[1] = 0;

  // Add the start cell to the queue
  q.push(1);

  // While the queue is not empty
  while (q.length !== 0) {
    // Get the current cell from the front of the queue
    let curr = q.shift()!;

    // Iterate through the possible next cells
    for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
      // Get the coordinates of the next cell
      let [row, column] = cells[next];

      // If the next cell is a ladder or snake, get the destination cell
      let destination = board[row][column] !== -1 ? board[row][column] : next;

      // If the distance to the destination cell has not been set
      if (dist[destination] === -1) {
        // Set the distance to the destination cell as the distance to the current cell + 1
        dist[destination] = dist[curr] + 1;

        // Add the destination cell to the queue
        q.push(destination);
      }
    }
  }
  // Return the distance from the start cell to the last cell in the board
  return dist[n * n];
}
