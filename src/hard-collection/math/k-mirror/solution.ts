export function kMirror(k: number, n: number): number {
  const mirrors: number[] = [];
  let len = 1;

  // keep increasing palindrome length until we have n of them
  while (mirrors.length < n) {
    const halfLen = Math.floor((len + 1) / 2);
    const start = halfLen === 1 ? 1 : 10 ** (halfLen - 1);
    const end = 10 ** halfLen - 1;

    for (let prefix = start; prefix <= end && mirrors.length < n; prefix++) {
      const left = prefix.toString();
      // build full palindrome by mirroring (omit middle char if len is odd)
      const revPart = left
        .split("")
        .reverse()
        .slice(len % 2) // if odd, drop the middle char
        .join("");
      const palStr = left + revPart;
      const num = parseInt(palStr, 10);

      // check base-k palindrome
      const bk = num.toString(k);
      if (isPal(bk)) {
        mirrors.push(num);
      }
    }

    len++;
  }

  // sum the first n k-mirror numbers
  return mirrors.reduce((sum, x) => sum + x, 0);
}

// helper to test if s is palindrome
const isPal = (s: string): boolean => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i++] !== s[j--]) {
      return false;
    }
  }
  return true;
};
