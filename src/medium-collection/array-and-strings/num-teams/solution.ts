export function numTeams(rating: number[]): number {
  let count = 0;
  const n = rating.length;

  for (let j = 0; j < n; j++) {
    let lessThanLeft = 0;
    let greaterThanLeft = 0;
    let lessThanRight = 0;
    let greaterThanRight = 0;

    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) {
        lessThanLeft++;
      } else if (rating[i] > rating[j]) {
        greaterThanLeft++;
      }
    }

    for (let k = j + 1; k < n; k++) {
      if (rating[k] < rating[j]) {
        lessThanRight++;
      } else if (rating[k] > rating[j]) {
        greaterThanRight++;
      }
    }

    count += lessThanLeft * greaterThanRight + greaterThanLeft * lessThanRight;
  }

  return count;
}
