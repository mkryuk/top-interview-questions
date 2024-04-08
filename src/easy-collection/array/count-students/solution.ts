export function countStudents(
  students: number[],
  sandwiches: number[],
): number {
  // Initialize a count array for both types of sandwiches (0 and 1)
  const studentsCount = [0, 0];

  // Count the number of students preferring each type of sandwich
  for (const student of students) {
    studentsCount[student]++;
  }

  // Iterate through the stack of sandwiches
  for (const sandwich of sandwiches) {
    // Check if there's a student preferring the current type of sandwich
    if (studentsCount[sandwich] > 0) {
      // If yes, decrement the count for that type of sandwich
      studentsCount[sandwich]--;
    } else {
      // If no student prefers this sandwich, stop the process
      break;
    }
  }

  // Return the sum of the remaining students who couldn't get their preferred sandwich
  return studentsCount[0] + studentsCount[1];
}
