export function distributeCookies(cookies: number[], k: number): number {
  let distribute: number[] = new Array(k).fill(0);

  return dfs(0, distribute, cookies, k, k);
}

function dfs(
  i: number,
  distribute: number[],
  cookies: number[],
  k: number,
  zeroCount: number,
): number {
  // If there are not enough cookies remaining, return Number.MAX_SAFE_INTEGER
  // as it leads to an invalid distribution.
  if (cookies.length - i < zeroCount) {
    return Number.MAX_SAFE_INTEGER;
  }

  // After distributing all cookies, return the unfairness of this
  // distribution.
  if (i === cookies.length) {
    let unfairness = Number.MIN_SAFE_INTEGER;
    for (let value of distribute) {
      unfairness = Math.max(unfairness, value);
    }
    return unfairness;
  }

  // Try to distribute the i-th cookie to each child, and update answer
  // as the minimum unfairness in these distributions.
  let result = Number.MAX_SAFE_INTEGER;
  for (let j = 0; j < k; ++j) {
    zeroCount -= distribute[j] === 0 ? 1 : 0;
    distribute[j] += cookies[i];

    // Recursively distribute the next cookie.
    result = Math.min(result, dfs(i + 1, distribute, cookies, k, zeroCount));

    distribute[j] -= cookies[i];
    zeroCount += distribute[j] === 0 ? 1 : 0;
  }

  return result;
}
