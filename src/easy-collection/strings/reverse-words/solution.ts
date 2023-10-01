export function reverseWords(s: string): string {
  return s
    .split(" ")
    .map((v) => v.split("").reverse().join(""))
    .join(" ");
}
