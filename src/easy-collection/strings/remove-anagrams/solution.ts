export function removeAnagrams(words: string[]): string[] {
  const result: string[] = [];
  let prevKey: string | null = null;

  for (const w of words) {
    const key = w.split("").sort().join("");
    if (prevKey !== null && key === prevKey) {
    } else {
      result.push(w);
      prevKey = key;
    }
  }

  return result;
}
