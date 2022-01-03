export function longestPalindrome(s: string): string {
  let result = "";
  for (let i = 0, l = 0, r = 0; i < s.length || r < s.length; l = i, r = i) {
    let temp = s[i];
    // check the right character
    // and compare with the current one
    // if they are the same - add it to palindrome
    while (r + 1 < s.length && s[r + 1] === s[i]) {
      temp += s[++r];
    }
    // skip equal letters
    i = r + 1;

    // check left and right characters
    // if they are the same - add them to palindrome
    while (l > 0 && r < s.length && s[--l] === s[++r]) {
      temp = s[l] + temp + s[r];
    }
    result = result.length >= temp.length ? result : temp;
  }
  return result;
}
