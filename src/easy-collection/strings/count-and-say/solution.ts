export function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }
  const number = countAndSay(n - 1);
  let result = "";
  let count = 0;

  for (let k = 0, i = 0; k < number.length; ) {
    while (number[i] === number[k]) {
      count++;
      i++;
    }
    result += `${count}${number[k]}`;
    k = i;
    count = 0;
  }
  return result;
}
