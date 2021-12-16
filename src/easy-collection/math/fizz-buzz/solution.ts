export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    const divBy3 = i % 3 === 0;
    const divBy5 = i % 5 === 0;
    if (divBy3 && divBy5) {
      result.push("FizzBuzz");
    } else if (divBy3) {
      result.push("Fizz");
    } else if (divBy5) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
