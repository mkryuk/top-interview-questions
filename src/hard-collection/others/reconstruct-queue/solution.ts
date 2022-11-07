export function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    const [ha, ka] = a;
    const [hb, kb] = b;
    if (ha === hb) {
      return ka - kb;
    }
    return ha - hb;
  });
  const result = new Array(people.length);
  for (let i = 0; i < people.length; i++) {
    const idx = getIndex(people[i], result);
    result[idx] = people[i];
  }
  return result;
}

function getIndex(item: number[], result: number[][]) {
  const [h, k] = item;
  let toSkip = k + 1;
  let index = k;
  for (let i = 0; toSkip; i++) {
    if (result[i] === undefined || result[i][0] >= h) {
      toSkip--;
    }
    index = i;
  }
  return index;
}
