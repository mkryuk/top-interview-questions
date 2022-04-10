# Flatten 2D Vector

Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.

Implement the Vector2D class:

- Vector2D(int[][] vec) initializes the object with the 2D vector vec.
- next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
- hasNext() returns true if there are still some elements in the vector, and false otherwise.

## Example 1:

```
Input
["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
Output
[null, 1, 2, 3, true, true, 4, false]

Explanation
Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
vector2D.next();    // return 1
vector2D.next();    // return 2
vector2D.next();    // return 3
vector2D.hasNext(); // return True
vector2D.hasNext(); // return True
vector2D.next();    // return 4
vector2D.hasNext(); // return False
```

## Constraints:

- 0 <= vec.length <= 200
- 0 <= vec[i].length <= 500
- -500 <= vec[i][j] <= 500
- At most 105 calls will be made to next and hasNext.

Follow up: As an added challenge, try to code it using only iterators in C++ or iterators in Java.

<details>
<summary>Hint #1</summary>
How many variables do you need to keep track?
</details>

<details>
<summary>Hint #2</summary>
Two variables is all you need. Try with x and y.
</details>

<details>
<summary>Hint #3</summary>
Beware of empty rows. It could be the first few rows.
</details>

<details>
<summary>Hint #4</summary>
To write correct code, think about the invariant to maintain. What is it?
</details>

<details>
<summary>Hint #5</summary>
The invariant is x and y must always point to a valid point in the 2d vector. Should you maintain your invariant ahead of time or right when you need it?
</details>

<details>
<summary>Hint #6</summary>
Not sure? Think about how you would implement hasNext(). Which is more complex?
</details>

<details>
<summary>Hint #7</summary>
Common logic in two different places should be refactored into a common method.
</details>
