export function addDigits(num: number): number {
  // if (num == 0) return 0;
  // if (num % 9 == 0) return 9;
  // return num % 9;
  // Mathematical: Digital Root
  // The original number is divisible by 9 if 
  // and only if the sum of its digits is divisible by 9
  return num == 0 ? 0 : 1 + ((num - 1) % 9);
}
