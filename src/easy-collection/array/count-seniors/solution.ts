export function countSeniors(details: string[]): number {
  let result = 0;
  for (const person of details) {
    let age = parseInt(person.slice(11, 13), 10);
    if (age > 60) {
      result++;
    }
  }
  return result;
}
