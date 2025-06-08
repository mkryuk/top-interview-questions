export function clearStars(s: string): string {
  const n = s.length;
  const letterPositions: number[][] = Array.from({ length: 26 }, () => []);
  const deletedPositions = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (s[i] === "*") {
      for (let i = 0; i < 26; i++) {
        // if there are letters to delete
        if (letterPositions[i].length > 0) {
          const idx = letterPositions[i].pop()!;
          deletedPositions[idx] = true;
          break;
        }
      }
    } else {
      const idx = s.charCodeAt(i) - 97;
      letterPositions[idx].push(i);
    }
  }

  const result: string[] = [];
  for (let i = 0; i < n; i++) {
    if (s[i] !== "*" && !deletedPositions[i]) {
      result.push(s[i]);
    }
  }
  return result.join("");
}
