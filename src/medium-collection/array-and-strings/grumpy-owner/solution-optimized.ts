export function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number,
): number {
  let fromIndex = 0;
  let toIndex = minutes - 1;

  // Calculate the sum of customers for the first "minutes" interval
  let customersSum = customers
    .slice(0, minutes)
    .reduce((acc, current) => current + acc, 0);

  // Calculate the sum of satisfied customers for the first "minutes" interval
  let satisfiedCustomersSum = customers
    .slice(0, minutes)
    .reduce((acc, current, index) => (grumpy[index] ? acc : current + acc), 0);

  // Calculate the initial grumpy difference
  let grumpyDifference = customersSum - satisfiedCustomersSum;

  // Iterate through the customer array, starting from index "minutes"
  for (let index = minutes; index < customers.length; index++) {
    // Update the customersSum, subtracting the customer who leaves the window and adding the new customer
    customersSum += customers[index] - customers[index - minutes];

    // Update the satisfiedCustomersSum based on the new customer's grumpy state
    if (!grumpy[index]) {
      satisfiedCustomersSum = satisfiedCustomersSum + customers[index];
    }

    // Update the satisfiedCustomersSum based on the leaving customer's grumpy state
    if (!grumpy[index - minutes]) {
      satisfiedCustomersSum =
        satisfiedCustomersSum - customers[index - minutes];
    }

    // Check if the current grumpy difference is greater than the previous one
    if (grumpyDifference < customersSum - satisfiedCustomersSum) {
      // Update grumpyDifference and store the new range
      grumpyDifference = customersSum - satisfiedCustomersSum;
      fromIndex = index - minutes + 1;
      toIndex = index;
    }
  }

  // Calculate the final sum of satisfied customers
  let result = 0;
  for (let index = 0; index < customers.length; index++) {
    // Add the customer to the sum if they are not grumpy or within the best range
    if (!grumpy[index] || (index >= fromIndex && index <= toIndex)) {
      result += customers[index];
    }
  }

  // Return the maximum number of satisfied customers
  return result;
}
