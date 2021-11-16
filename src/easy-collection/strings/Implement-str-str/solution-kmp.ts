export function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  const prefix = getKmpTable(needle);
  for (let i = 0, k = 0; i < haystack.length; ) {
    if (haystack[i] === needle[k]) {
      i++;
      k++;
      if (k === needle.length) {
        return i - k;
      }
    } else {
      if (k === 0) {
        i++;
      } else {
        k = prefix[k - 1];
      }
    }
  }
  return -1;
}

function getKmpTable(s: string): number[] {
  let table = new Array(s.length);
  table[0] = 0;
  for (let k = 0, i = 1; i < s.length; i++) {
    k = table[i - 1];
    while (k > 0 && s[k] !== s[i]) {
      k = table[k - 1];
    }
    if (s[k] == s[i]) {
      k += 1;
    }
    table[i] = k;
  }
  return table;
}
