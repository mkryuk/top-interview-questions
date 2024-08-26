export function nearestPalindromic(n: string): string {
  const num = BigInt(n);
  const length = n.length;

  // generate candidate palindromes
  const candidates: bigint[] = [];

  // case 1: Palindromes with the same length
  const half = n.slice(0, Math.ceil(length / 2));
  const halfNum = BigInt(half);
  candidates.push(generatePalindrome(half, length));
  candidates.push(generatePalindrome((halfNum - BigInt(1)).toString(), length));
  candidates.push(generatePalindrome((halfNum + BigInt(1)).toString(), length));

  // case 2: Palindrome with length + 1
  candidates.push(BigInt("1" + "0".repeat(length - 1) + "1"));

  // case 3: Palindrome with length - 1
  if (length > 1) {
    candidates.push(BigInt("9".repeat(length - 1)));
  }

  // find the closest palindrome
  let closest = candidates[0];
  let minDiff = BigInt(Number.MAX_SAFE_INTEGER);

  for (const candidate of candidates) {
    if (candidate !== num) {
      const diff = candidate > num ? candidate - num : num - candidate;
      if (diff < minDiff || (diff === minDiff && candidate < closest)) {
        closest = candidate;
        minDiff = diff;
      }
    }
  }

  return closest.toString();
}

// helper function to generate palindrome
function generatePalindrome(half: string, length: number): bigint {
  const reverseHalf = half
    .slice(0, length % 2 ? -1 : undefined)
    .split("")
    .reverse()
    .join("");
  return BigInt(half + reverseHalf);
}
