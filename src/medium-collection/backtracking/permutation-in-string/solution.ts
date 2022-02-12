export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }
  let map1 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    map1[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    let map2 = new Array(26).fill(0);
    for (let j = 0; j < s1.length; j++) {
      map2[s2.charCodeAt(i + j) - "a".charCodeAt(0)]++;
    }
    if (mapsAreEqual(map1, map2)) {
      return true;
    }
  }
  return false;
}

function mapsAreEqual(map1: number[], map2: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (map1[i] != map2[i]) {
      return false;
    }
  }
  return true;
}
