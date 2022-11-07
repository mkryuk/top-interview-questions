export function reconstructQueue(people: number[][]): number[][] {
  // sort it in desc order by height, but asc by k
  // [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
  // [[7,0],[7,1],[6,1],[5,0],[5,2]],[4,4]
  people.sort((a, b) => {
    const [ha, ka] = a;
    const [hb, kb] = b;
    if (ha === hb) {
      return ka - kb;
    }
    return hb - ha;
  });
  const result: number[][] = [];
  // take one by one, and insert in the output array
  // at the indexes equal to their k-values.
  // result => [[7,0]]
  // result => [[7,0], [7,1]]
  // result => [[7,0], [6,1], [7,1]]
  // result => [[5,0], [7,0], [6,1], [7,1]]
  // result => [[5,0], [7,0], [5,2], [6,1], [7,1]]
  // result => [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
  for (let i = 0; i < people.length; i++) {
    const [h, k] = people[i];
    result.splice(k, 0, people[i]);
  }
  return result;
}
