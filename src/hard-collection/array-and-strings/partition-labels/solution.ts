export function partitionLabels(s: string): number[] {
  const charLastIndex = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    charLastIndex.set(s[i], i);
  }
  let result: number[] = [];
  for (let i = 0; i < s.length; ) {
    let lastIndex = charLastIndex.get(s[i])!;
    for (let j = i + 1; j < lastIndex; j++) {
      lastIndex = Math.max(lastIndex, charLastIndex.get(s[j])!);
    }
    result.push(lastIndex - i + 1);
    i = lastIndex + 1;
  }

  return result;
}
