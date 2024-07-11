export function minOperations(logs: string[]): number {
  let steps = 0;
  for (const operation of logs) {
    const cmd = operation.substring(operation.length - 3);
    if (cmd === "../") {
      steps = Math.max(0, steps - 1);
    } else if (cmd !== "./") {
      steps++;
    }
  }
  return steps;
}
