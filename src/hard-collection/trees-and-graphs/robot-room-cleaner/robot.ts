import { uniquePaths } from "../../../medium-collection/dynamic-programming/unique-paths/solution";

export class Robot {
  private directionIdx = Direction.Up;
  get direction() {
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    return directions[this.directionIdx];
  }

  constructor(private room: number[][], private row: number, private col: number) {}
  // Returns true if the cell in front is open and robot moves into the cell.
  // Returns false if the cell in front is blocked and robot stays in the current cell.
  move(): boolean {
    const [row, col] = this.direction;
    const newRow = this.row + row;
    const newCol = this.col + col;
    if (newRow < 0 || newRow >= this.room.length) {
      return false;
    }
    if (newCol < 0 || newCol >= this.room[0].length) {
      return false;
    }
    if (this.room[newRow][newCol] === 0) {
      return false;
    }
    this.row = newRow;
    this.col = newCol;
    return true;
  }

  // Robot will stay in the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  turnRight(): void {
    if (this.directionIdx === Direction.Left) {
      this.directionIdx = Direction.Up;
    } else {
      this.directionIdx++;
    }
    // switch (this.directionIdx) {
    //   case Direction.Right:
    //     this.directionIdx = Direction.Down;
    //     break;
    //   case Direction.Down:
    //     this.directionIdx = Direction.Left;
    //     break;
    //   case Direction.Left:
    //     this.directionIdx = Direction.Up;
    //     break;
    //   case Direction.Up:
    //     this.directionIdx = Direction.Right;
    //     break;
    // }
  }

  // Robot will stay in the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  turnLeft(): void {
    if (this.directionIdx === Direction.Up) {
      this.directionIdx = Direction.Left;
    } else {
      this.directionIdx--;
    }
    // switch (this.directionIdx) {
    //   case Direction.Right:
    //     this.directionIdx = Direction.Up;
    //     break;
    //   case Direction.Up:
    //     this.directionIdx = Direction.Left;
    //     break;
    //   case Direction.Left:
    //     this.directionIdx = Direction.Down;
    //     break;
    //   case Direction.Down:
    //     this.directionIdx = Direction.Right;
    //     break;
    // }
  }

  // Clean the current cell.
  clean(): void {
    this.room[this.row][this.col] = 2;
  }
}

enum Direction {
  Up,
  Right,
  Down,
  Left,
}
