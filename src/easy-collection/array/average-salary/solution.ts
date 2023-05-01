export function average(salary: number[]): number {
  let max = salary[0];
  let min = salary[0];
  let sum = salary[0];
  for (let i = 1; i < salary.length; i++) {
    max = Math.max(max, salary[i]);
    min = Math.min(min, salary[i]);
    sum += salary[i];
  }
  sum -= max + min;
  return sum / (salary.length - 2);
}
