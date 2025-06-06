export function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
  const parent = new Array(26);
  for (let i = 0; i < 26; i++) {
    parent[i] = i;
  }

  const n = s1.length;
  for (let i = 0; i < n; i++) {
    const idx1 = s1.charCodeAt(i) - 97;
    const idx2 = s2.charCodeAt(i) - 97;
    union(idx1, idx2, parent);
  }

  const result: string[] = [];
  for (const ch of baseStr) {
    const idx = ch.charCodeAt(0) - 97;
    const root = find(idx, parent);
    result.push(String.fromCharCode(root + 97));
  }

  return result.join("");
}

function union(s1: number, s2: number, parent: number[]) {
  // find first root
  const r1 = find(s1, parent);
  // find second root
  const r2 = find(s2, parent);
  // if they are equal they are in one group
  if (r1 === r2) {
    return;
  }
  // union one subset with another
  if (r1 < r2) {
    parent[r2] = r1;
  } else {
    parent[r1] = r2;
  }
}

function find(s: number, parent: number[]): number {
  // if s is not it's root find it
  if (parent[s] !== s) {
    // compress the path
    parent[s] = find(parent[s], parent);
  }
  return parent[s];
}
