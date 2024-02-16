export function reformat(s: string): string {
  const digits: string[] = [];
  const letters: string[] = [];

  // Separate digits and letters into their respective arrays
  for (const char of s) {
    if (char >= "0" && char <= "9") {
      digits.push(char);
    } else {
      letters.push(char);
    }
  }

  // If the absolute difference between digits and letters is more than 1, return an empty string
  if (Math.abs(digits.length - letters.length) > 1) {
    return "";
  }

  const result: string[] = new Array(s.length);
  let digitIndex = digits.length >= letters.length ? 0 : 1; // Start index for digits
  let letterIndex = digits.length >= letters.length ? 1 : 0; // Start index for letters

  // Place digits and letters at their correct positions
  for (let i = 0; i < digits.length; i++, digitIndex += 2) {
    result[digitIndex] = digits[i];
  }
  for (let i = 0; i < letters.length; i++, letterIndex += 2) {
    result[letterIndex] = letters[i];
  }

  return result.join("");
}
