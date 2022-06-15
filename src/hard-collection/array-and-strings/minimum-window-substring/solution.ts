export function minWindow(s: string, t: string): string {
  if (s.length < t.length) {
    return "";
  }
  const st = t.split("").sort();
  const map = new Map<string, { count: number; indexes: number[] }>();
  const tLen = t.length;
  let mapLen = 0;
  let result = "";
  for (let i = 0; i < st.length; i++) {
    if (map.has(st[i])) {
      const item = map.get(st[i])!;
      map.set(st[i], { count: item.count + 1, indexes: [] });
    } else {
      map.set(st[i], { count: 1, indexes: [] });
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const item = map.get(s[i])!;
      if (item.count <= item.indexes.length) {
        item.indexes.shift();
      } else {
        mapLen++;
      }
      item.indexes.push(i);
      map.set(s[i], item);
    }
    if (mapLen === tLen) {
      let startIdx = Infinity;
      let key = "";
      map.forEach((v, k) => {
        if (startIdx > v.indexes[0]) {
          startIdx = v.indexes[0];
          key = k;
        }
      });
      const item = map.get(key)!;
      item.indexes.shift();
      map.set(key, item);
      mapLen--;
      const tempResult = s.substring(startIdx, i + 1);
      result =
        result && result.length < tempResult.length ? result : tempResult;
    }
  }
  return result;
}
