import { assignTasks } from "./solution";

describe("1882. Process Tasks Using Servers:", () => {
  it("assignTasks should return [2,2,0,2,1,2] for servers = [3,3,2], tasks = [1,2,3,2,1,2]", () => {
    const servers = [3, 3, 2];
    const tasks = [1, 2, 3, 2, 1, 2];
    const result = assignTasks(servers, tasks);
    expect(result).toEqual([2, 2, 0, 2, 1, 2]);
  });

  it("assignTasks should return [1,4,1,4,1,3,2] for servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]", () => {
    const servers = [5, 1, 4, 3, 2];
    const tasks = [2, 1, 2, 4, 5, 2, 1];
    const result = assignTasks(servers, tasks);
    expect(result).toEqual([1, 4, 1, 4, 1, 3, 2]);
  });
});
