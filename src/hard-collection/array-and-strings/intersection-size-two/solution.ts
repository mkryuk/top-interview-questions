export function intersectionSizeTwo(intervals: number[][]): number {
  // sort by end ascending; if tie, by start descending
  intervals.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]));

  // a = second last picked number, b = last picked number
  let a: number = -1;
  let b: number = -1;
  let result: number = 0;

  for (const interval of intervals) {
    const start: number = interval[0];
    const end: number = interval[1];

    // count how many of {a, b} are already inside [start, end]
    let count: number = 0;
    if (b >= start) {
      count += 1;
    }
    if (a >= start) {
      count += 1;
    }

    if (count === 2) {
      // both a and b are already inside this interval
      // nothing to add
      continue;
    }

    if (count === 1) {
      // only b is inside the interval
      // add one more number: greedily pick 'end'
      // note: due to sorting, end > b in this case, so it is a new number
      a = b;
      b = end;
      result += 1;
    } else {
      // count === 0: neither a nor b are inside the interval
      // we need to add two numbers: end - 1 and end
      a = end - 1;
      b = end;
      result += 2;
    }
  }

  return result;
}
