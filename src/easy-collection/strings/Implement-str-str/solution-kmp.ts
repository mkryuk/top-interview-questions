export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  const prefix = getKmpTable(needle);
  for (let i = 0, j = 0; i < haystack.length; ) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = prefix[j - 1];
      }
    }
  }
  return -1;
}

function getKmpTable(needle: string): number[] {
  let table = new Array(needle.length);
  table[0] = 0;
  for (let j = 0, i = 1; i < needle.length; i++) {
    if (needle[i] === needle[j]) {
      table[i] = j + 1;
      j++;
    } else {
      while (j > 0 && needle[i] !== needle[j]) {
        j = table[j - 1];
      }
      if (j === 0 && needle[i] !== needle[j]) {
        table[i] = 0;
      } else {
        table[i] = table[j] + 1;
        j++;
      }
    }
  }
  return table;
}
