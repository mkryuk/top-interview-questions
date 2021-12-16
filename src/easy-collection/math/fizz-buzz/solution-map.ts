export function fizzBuzz(n: number): string[] {
  // using map we can easily add other mappings like [7, "Jazz"]
  // and we don't have to change the rest of the code
  const map = new Map<number, string>([
    [3, "Fizz"],
    [5, "Buzz"],
  ]);
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    let strItem = "";
    map.forEach((val, key) => {
      if (i % key === 0) {
        strItem += val;
      }
    });
    if (strItem === "") {
      strItem += i.toString();
    }
    result.push(strItem);
  }
  return result;
}
