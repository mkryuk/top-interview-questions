export function openLock(deadends: string[], target: string): number {
  const queue: [string, number][] = [["0000", 0]];
  const deadSet = new Set<string>(deadends);
  const visited = new Set<string>();
  if (deadSet.has("0000")) {
    return -1;
  }

  while (queue.length > 0) {
    const [currStr, turns] = queue.shift()!;
    if (currStr === target) {
      return turns;
    }
    for (let i = 0; i < 4; i++) {
      const num = parseInt(currStr[i], 10);
      const up = (num + 1) % 10;
      const down = (num + 9) % 10;
      const nextUp = currStr.slice(0, i) + up + currStr.slice(i + 1);
      const nextDown = currStr.slice(0, i) + down + currStr.slice(i + 1);
      if (!visited.has(nextUp) && !deadSet.has(nextUp)) {
        visited.add(nextUp);
        queue.push([nextUp, turns + 1]);
      }
      if (!visited.has(nextDown) && !deadSet.has(nextDown)) {
        visited.add(nextDown);
        queue.push([nextDown, turns + 1]);
      }
    }
  }

  return -1;
}
