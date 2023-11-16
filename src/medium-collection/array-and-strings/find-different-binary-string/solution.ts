export function findDifferentBinaryString(nums: string[]): string {
  let result = "";
  for (let i = 0; i < nums.length; i++) {
    // Choose the opposite character from the ith position of the ith string
    result += nums[i][i] === "0" ? "1" : "0";
  }
  return result;
}
