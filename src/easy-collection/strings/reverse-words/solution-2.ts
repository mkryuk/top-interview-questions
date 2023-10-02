export function reverseWords(s: string): string {
  let from = 0;
  let to = 0;
  let result = split(s);
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== " " && i < result.length - 1) {
      to++;
      continue;
    }
    to = i === result.length - 1 ? to : to - 1;
    reverse(result, from, to);
    from = i + 1;
    to = i + 1;
  }
  return join(result);
}

function split(s: string): string[] {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(s[i]);
  }
  return result;
}

function join(s: string[]): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i];
  }
  return result;
}

function reverse(array: string[], from: number, to: number) {
  while (from < to) {
    const temp = array[from];
    array[from] = array[to];
    array[to] = temp;
    from++;
    to--;
  }
}
