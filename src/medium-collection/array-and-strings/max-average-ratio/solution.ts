import { Heap } from "../../../hard-collection/design/heap/heap";

export function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const maxHeap = new Heap<[number, number, number]>((a, b) => b[0] - a[0]);
  for (const [pass, total] of classes) {
    const gain = getPotentialGain(pass, total);
    maxHeap.push([gain, pass, total]);
  }

  while (extraStudents > 0) {
    const [gain, pass, total] = maxHeap.pop()!;
    const newPass = pass + 1;
    const newTotal = total + 1;
    const newGain = getPotentialGain(newPass, newTotal);
    maxHeap.push([newGain, newPass, newTotal]);
    extraStudents--;
  }

  let totalRatio = 0;
  while (!maxHeap.isEmpty()) {
    const [gain, pass, total] = maxHeap.pop()!;
    totalRatio += pass / total;
  }

  return parseFloat((totalRatio / classes.length).toFixed(5));
}

function getPotentialGain(pass: number, total: number): number {
  return (pass + 1) / (total + 1) - pass / total;
}
