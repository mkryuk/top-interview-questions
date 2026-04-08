export class Robot {
  private width: number;
  private height: number;
  private perimeter: number;
  private totalSteps: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    // one full loop over the border cells
    this.perimeter = 2 * (width + height) - 4;

    // total number of executed steps across all step() calls
    this.totalSteps = 0;
  }

  step(num: number): void {
    // we do not simulate movement step by step
    // total position/direction can be derived from totalSteps % perimeter
    this.totalSteps += num;
  }

  getPos(): number[] {
    const k = this.getOffset();

    // segment lengths of the border walk
    const bottom = this.width - 1;
    const right = this.height - 1;
    const top = this.width - 1;

    // offset 0 means the robot is exactly at the starting cell
    if (k === 0) {
      return [0, 0];
    }

    // moving along bottom edge: (0,0) -> (width-1,0)
    if (k <= bottom) {
      return [k, 0];
    }

    // moving along right edge: (width-1,0) -> (width-1,height-1)
    if (k <= bottom + right) {
      return [this.width - 1, k - bottom];
    }

    // moving along top edge: (width-1,height-1) -> (0,height-1)
    if (k <= bottom + right + top) {
      const d = k - bottom - right;
      return [this.width - 1 - d, this.height - 1];
    }

    // moving along left edge: (0,height-1) -> (0,0)
    const d = k - bottom - right - top;
    return [0, this.height - 1 - d];
  }

  getDir(): string {
    const k = this.getOffset();

    // segment lengths of the border walk
    const bottom = this.width - 1;
    const right = this.height - 1;
    const top = this.width - 1;

    // initial state before any movement is special
    if (this.totalSteps === 0) {
      return "East";
    }

    // after a full loop the robot returns to (0,0),
    // but the last successful move was downward on the left edge
    if (k === 0) {
      return "South";
    }

    // direction is determined by the edge on which the robot currently is
    // corner cells belong to the segment by which the robot arrived there
    if (k <= bottom) {
      return "East";
    }

    if (k <= bottom + right) {
      return "North";
    }

    if (k <= bottom + right + top) {
      return "West";
    }

    return "South";
  }

  private getOffset(): number {
    // only the position within the current perimeter cycle matters
    return this.totalSteps % this.perimeter;
  }
}
