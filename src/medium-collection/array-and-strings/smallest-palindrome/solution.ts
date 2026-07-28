export function smallestPalindrome(s: string): string {
  const frequencies: number[] = new Array(26).fill(0);

  for (const character of s) {
    const index: number = character.charCodeAt(0) - 97;
    frequencies[index]++;
  }

  const leftParts: string[] = [];
  let middle: string = "";

  for (let index: number = 0; index < 26; index++) {
    const character: string = String.fromCharCode(97 + index);
    const pairsCount: number = Math.floor(frequencies[index] / 2);

    if (pairsCount > 0) {
      leftParts.push(character.repeat(pairsCount));
    }

    if (frequencies[index] % 2 === 1) {
      middle = character;
    }
  }

  const left: string = leftParts.join("");
  const right: string = left.split("").reverse().join("");

  return left + middle + right;
}
