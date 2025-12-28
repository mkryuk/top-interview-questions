export function addBinary(a: string, b: string): string {
  let i: number = a.length - 1;
  let j: number = b.length - 1;
  let carry: number = 0;
  const result: string[] = [];

  while (i >= 0 || j >= 0 || carry !== 0) {
    let sum: number = carry;

    if (i >= 0) {
      sum += a.charCodeAt(i) - 48; // '0' -> 48, '1' -> 49
      i--;
    }

    if (j >= 0) {
      sum += b.charCodeAt(j) - 48;
      j--;
    }

    result.push((sum & 1) === 1 ? "1" : "0");
    carry = sum >> 1;
  }

  result.reverse();
  return result.join("");
}
