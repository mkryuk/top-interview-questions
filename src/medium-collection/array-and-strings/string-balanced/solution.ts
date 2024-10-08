export function minSwaps(s: string): number {
  let open = 0;
  let close = 0;
  let result = 0;
  let arr = s.split("");
  let openIndex = arr.lastIndexOf("[");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "[") {
      open++;
    } else {
      close++;
    }
    if (close - open > 0) {
      arr[i] = "[";
      arr[openIndex] = "]";
      openIndex = arr.lastIndexOf("[", openIndex);
      close--;
      open++;
      result++;
    }
  }

  return result;
}
