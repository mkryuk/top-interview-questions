import { ListNode } from "../common";

export function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const matrix: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let currentNode = head;
  let dir = 0; // start with moving to the right
  let row = 0;
  let col = 0; // start at the top-left corner

  while (currentNode) {
    matrix[row][col] = currentNode.val;
    currentNode = currentNode.next;

    const newRow = row + directions[dir][0];
    const newCol = col + directions[dir][1];

    // check if the new position is out of the current bounds
    if (newRow < top || newRow > bottom || newCol < left || newCol > right) {
      // if out of bounds, change direction and update the boundaries
      if (dir === 0) {
        // moving right, so shrink the top boundary
        top++;
      } else if (dir === 1) {
        // moving down, so shrink the right boundary
        right--;
      } else if (dir === 2) {
        // moving left, so shrink the bottom boundary
        bottom--;
      } else if (dir === 3) {
        // moving up, so shrink the left boundary
        left++;
      }

      // change the direction (right -> down -> left -> up -> right ...)
      dir = (dir + 1) % 4;
    }

    // move to the next position
    row += directions[dir][0];
    col += directions[dir][1];
  }

  return matrix;
}
