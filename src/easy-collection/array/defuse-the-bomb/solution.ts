export function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  let result = new Array(n).fill(0);

  if (k === 0) {
    return result;
  }

  let window = 0;
  if (k > 0) {
    for (let i = 1; i <= k; i++) {
      window += code[i % n];
    }
  } else {
    for (let i = n - 1; i >= n + k; i--) {
      window += code[i % n];
    }
  }

  for (let i = 0; i < n; i++) {
    result[i] = window;
    if (k > 0) {
      window -= code[(i + 1) % n];
      window += code[(k + i + 1) % n];
    } else {
      window -= code[(n + k + i) % n];
      window += code[(n + i) % n];
    }
  }

  return result;
}
