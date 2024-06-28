export function findCenter(edges: number[][]): number {
  const [u1, v1] = edges[0];
  const [u2, v2] = edges[1];
  // the center of the star graph will be either u1 or v1 from the first edge
  if (u1 === u2 || u1 === v2) {
    return u1;
  }
  return v1;
}
