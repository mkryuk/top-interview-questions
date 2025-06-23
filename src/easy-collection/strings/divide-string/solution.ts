export function divideString(s: string, k: number, fill: string): string[] {
  const result: string[] = [];
  const groupCount = Math.ceil(s.length / k);
  for (let i = 0; i < groupCount; i++) {
    const chunk = s.substring(i * k, i * k + k);
    if (chunk.length < k) {
      result.push(chunk + fill.repeat(k - chunk.length));
    } else {
      result.push(chunk);
    }
  }
  return result;
}
