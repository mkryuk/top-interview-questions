export function numSteps(s: string): number {
  let result = 0;
  let arr = s.split("");
  while (arr.length > 1) {
    let lastIndex = arr.length - 1;
    // if the last character is '0', it's even
    // so divide by 2 (remove the last character)
    if (arr[lastIndex] === "0") {
      arr.pop();
    } else {
      // if the last character is '1', it's odd
      // so we need to add 1
      while (lastIndex >= 0 && arr[lastIndex] === "1") {
        // set all trailing '1's to '0'
        arr[lastIndex] = "0";
        lastIndex--;
      }
      if (lastIndex >= 0) {
        // set the first '0' from the end to '1'
        arr[lastIndex] = "1";
      } else {
        // if all bits were '1', we need an extra bit (e.g., 111 + 1 = 1000)
        arr.unshift("1");
      }
    }
    result++;
  }
  return result;
}
