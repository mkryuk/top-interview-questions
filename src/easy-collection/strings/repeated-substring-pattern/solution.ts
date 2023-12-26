export function repeatedSubstringPattern(s: string): boolean {
  // Concatenate the string with itself and create a new string newS
  let newS = s + s;

  // Remove the first and the last characters from newS
  newS = newS.slice(1, -1);

  // Check if the original string exists in the modified newS.
  // If it does, it means the original string can be formed by repeating a substring.
  return newS.includes(s);
}
