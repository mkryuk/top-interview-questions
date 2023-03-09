export function compress(chars: string[]): number {
  let read = 1;
  let write = 0;
  for (let i = 0; i < chars.length; i = read) {
    while (read < chars.length && chars[read] === chars[i]) {
      read++;
    }
    chars[write++] = chars[i];
    let diff = read - i;
    if (diff > 1) {
      let sDiff = diff.toString();
      for (let j = 0; j < sDiff.length; j++) {
        chars[write++] = sDiff[j];
      }
    }
  }
  return write;
}
