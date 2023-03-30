export function numRabbits(answers: number[]): number {
  const counts: Map<number, number> = new Map();

  // Count the occurrences of each answer
  for (const answer of answers) {
    counts.set(answer, (counts.get(answer) || 0) + 1);
  }

  let rabbits = 0;

  // Calculate the minimum number of rabbits for each unique answer
  for (const [k, v] of Array.from(counts)) {
    // Calculate the number of rabbit groups with the same color for the current answer
    const groups = Math.ceil(v / (k + 1));
    // Add the minimum number of rabbits that could produce this answer
    rabbits += groups * (k + 1);
  }

  return rabbits;
}
