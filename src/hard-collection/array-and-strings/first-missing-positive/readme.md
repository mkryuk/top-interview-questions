# First Missing Positive

Solution
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

## Example 1:

```
Input: nums = [1,2,0]
Output: 3
```

## Example 2:

```
Input: nums = [3,4,-1,1]
Output: 2
```

## Example 3:

```
Input: nums = [7,8,9,11,12]
Output: 1
```

## Constraints:

- 1 <= nums.length <= 5 \* 10<sup>5</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

<details>
<summary>Hint #1</summary>
  Think about how you would solve the problem in non-constant space. Can you apply that logic to the existing space?
</details>

<details>
<summary>Hint #2</summary>
  We don't care about duplicates or non-positive integers
</details>

<details>
<summary>Hint #3</summary>
  Remember that O(2n) = O(n)
</details>
