export function areSimilar(mat: number[][], k: number): boolean {
  const m: number = mat.length;
  const n: number = mat[0].length;
  k %= n;
  for (let i: number = 0; i < m; i++) {
    for (let j: number = 0; j < n; j++) {
      if (mat[i][j] !== mat[i][(j + k) % n]) {
        return false;
      }
    }
  }
  return true;
}
