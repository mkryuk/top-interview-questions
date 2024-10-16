import { Heap } from "../../../hard-collection/design/heap/heap";

export function longestDiverseString(a: number, b: number, c: number): string {
  let heap = new Heap<{ char: string; num: number }>((a, b) => b.num - a.num);
  if (a > 0) {
    heap.push({ char: "a", num: a });
  }
  if (b > 0) {
    heap.push({ char: "b", num: b });
  }
  if (c > 0) {
    heap.push({ char: "c", num: c });
  }

  let result: string[] = [];
  let currentChar = "";
  while (heap.size() > 0) {
    const n = result.length;
    let top: { char: string; num: number } | null = heap.pop()!;
    if (n >= 2 && result[n - 1] === top.char && result[n - 2] === top.char) {
      const temp = top;
      top = heap.pop();
      if (top === null) {
        break;
      }
      heap.push(temp);
    }
    currentChar = top.char;
    top.num--;
    result.push(top.char);
    if (top.num > 0) {
      heap.push(top);
    }
  }
  return result.join("");
}
