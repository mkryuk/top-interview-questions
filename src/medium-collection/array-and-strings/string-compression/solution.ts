export function compress(chars: string[]): number {
  // add additional ending symbol
  // not char, to process last char
  chars.push("/");
  let read = 0;
  let write = 0;

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] !== chars[read]) {
      let diff = i - read;
      chars[write++] = chars[read];
      if (diff > 1) {
        let sDiff = diff.toString();
        for (let j = 0; j < sDiff.length; j++) {
          chars[write++] = sDiff[j];
        }
      }
      read = i;
    }
  }
  return write;
}
