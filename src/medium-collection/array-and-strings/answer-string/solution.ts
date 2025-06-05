export function answerString(word: string, numFriends: number): string {
  const n = word.length;
  if (numFriends === 1) {
    return word;
  }
  let result = "";
  for (let start = 0; start < n; start++) {
    let end = 0;
    if (start === 0) {
      // must leave numFriends-1 chars for other parts
      end = n - numFriends;
    } else if (start < numFriends) {
      // max length is (n - numFriends + 1)
      end = start + (n - numFriends);
    } else {
      // can go till the end
      end = n - 1;
    }
    const candidate = word.substring(start, end + 1);
    if (candidate > result) {
      result = candidate;
    }
  }
  return result;
}
