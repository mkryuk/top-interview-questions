export function maxDepthAfterSplit(seq: string): number[] {
  const answer: number[] = new Array(seq.length);
  let depth = 0;
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      depth++;
      answer[i] = depth % 2;
    } else {
      answer[i] = depth % 2;
      depth--;
    }
  }
  return answer;
}
