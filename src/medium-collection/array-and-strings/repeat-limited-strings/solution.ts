export function repeatLimitedString(s: string, repeatLimit: number): string {
  let freq = new Array(26).fill(0);

  for (const char of s) {
    const index = char.charCodeAt(0) - 97;
    freq[index]++;
  }

  const indexes = [];
  for (let i = 25; i >= 0; i--) {
    if (freq[i] > 0) {
      indexes.push(i);
    }
  }

  let lastIndex = 0;
  let result: string[] = [];
  while (lastIndex < indexes.length) {
    const currentIndex = indexes[lastIndex];
    const currentChar = String.fromCharCode(currentIndex + 97);
    let useCount = Math.min(freq[currentIndex], repeatLimit);

    result.push(currentChar.repeat(useCount));
    freq[currentIndex] -= useCount;

    if (freq[currentIndex] > 0) {
      // find the next available separator character
      let separatorFound = false;
      for (let i = lastIndex + 1; i < indexes.length; i++) {
        const separatorIndex = indexes[i];
        if (freq[separatorIndex] > 0) {
          const separatorChar = String.fromCharCode(separatorIndex + 97);
          result.push(separatorChar);
          freq[separatorIndex]--;
          separatorFound = true;
          break;
        }
      }
      if (!separatorFound) {
        break;
      }
    } else {
      lastIndex++;
    }
  }

  return result.join("");
}
