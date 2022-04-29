export function titleToNumber(columnTitle: string): number {
  let alphaNumber = createAlphabeticMap();
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let num = alphaNumber.get(columnTitle[i]) ?? 0;
    result += num * Math.pow(26, columnTitle.length - i - 1);
  }
  return result;
}

function createAlphabeticMap(): Map<string, number> {
  let map = new Map<string, number>();
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(i + 65), i + 1);
  }
  return map;
}
