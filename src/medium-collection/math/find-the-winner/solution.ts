export function findTheWinner(n: number, k: number): number {
  // Convert the result from 0-based index to 1-based index
  return josephus(n, k) + 1;
}

function josephus(n: number, k: number): number {
  if (n === 1) {
    return 0;
  } else {
    return (josephus(n - 1, k) + k) % n;
  }
}
