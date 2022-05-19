export function leastInterval(tasks: string[], n: number): number {
  // frequencies of the tasks
  let frequencies: number[] = new Array(26).fill(0);
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    frequencies[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  frequencies = frequencies.sort((a, b) => a - b);

  // max frequency
  let max = frequencies[25];
  let idleTime = (max - 1) * n;

  for (let i = frequencies.length - 2; i >= 0 && idleTime > 0; --i) {
    idleTime -= Math.min(max - 1, frequencies[i]);
  }
  idleTime = Math.max(0, idleTime);

  return idleTime + tasks.length;
}
