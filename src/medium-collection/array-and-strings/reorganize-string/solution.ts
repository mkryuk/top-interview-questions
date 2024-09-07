export function reorganizeString(s: string): string {
  let map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 0);
    }
    let char = map.get(s[i])!;
    map.set(s[i], char + 1);
  }
  let arr = Array.from(map);
  // we sort all symbols by their number
  arr.sort((a, b) => b[1] - a[1]);

  let count = 0;
  let index = 0;
  let result: string[] = [];
  while (count < s.length) {
    if (index === arr.length) {
      index = 0;
    }
    const [char, number] = arr[index];
    if (number === 0) {
      index++;
      continue;
    }
    result.push(char);
    count++;
    arr[index][1]--;
    if (
      index !== 0 &&
      index < arr.length - 1 &&
      // in case the next number < first
      // we return back to the first
      arr[0][1] > arr[index + 1][1]
    ) {
      index = 0;
      continue;
    }
    index++;
  }

  // if we have two similar chars at the end rearrangement is not possible
  return result[result.length - 1] === result[result.length - 2] ? "" : result.join("");
}
