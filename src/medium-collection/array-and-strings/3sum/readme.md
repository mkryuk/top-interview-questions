# 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

## Example 1:

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

## Example 2:

```
Input: nums = []
Output: []
```

## Example 3:

```
Input: nums = [0]
Output: []
```

## Constraints:

- 0 <= nums.length <= 3000
- -105 <= nums[i] <= 105

<details>
<summary>Hint #1</summary>
So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!
</details>

<details>
<summary>Hint #2</summary>
For the two-sum problem, if we fix one of the numbers, say

`x`

, we have to scan the entire array to find the next number

`y`

which is

`value - x`

where value is the input parameter. Can we change our array somehow so that this search becomes faster?

</details>

<details>
<summary>Hint #3</summary>
The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
</details>
