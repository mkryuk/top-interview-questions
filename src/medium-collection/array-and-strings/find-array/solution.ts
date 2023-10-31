export function findArray(pref: number[]): number[] {
  let prev = 0;
  let result: number[] = [];
  for (let i = 0; i < pref.length; i++) {
    result[i] = pref[i] ^ prev;
    prev = pref[i];
  }
  return result;
}
