export function getWinner(arr: number[], k: number): number {
  let winner = arr[0];
  let count = 0;
  let index = 1;
  while (count < k && index < arr.length) {
    if (winner > arr[index]) {
      count++;
    } else {
      count = 1;
      winner = arr[index];
    }
    index++;
  }
  return winner;
}
