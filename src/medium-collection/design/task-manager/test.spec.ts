import { TaskManager } from "./solution";

describe("3408. Design Task Manager", () => {
  it("TaskManager should pass test 1", () => {
    const tasks = [
      [1, 101, 10],
      [2, 102, 20],
      [3, 103, 15],
    ];
    const taskManager = new TaskManager(tasks);

    // add task 104 for user 4 with priority 5
    taskManager.add(4, 104, 5);

    // edit task 102 priority to 8
    taskManager.edit(102, 8);

    // execTop should execute task 103 and return user 3
    expect(taskManager.execTop()).toBe(3);

    // remove task 101
    taskManager.rmv(101);

    // add task 105 for user 5 with priority 15
    taskManager.add(5, 105, 15);

    // execTop should execute task 105 and return user 5
    expect(taskManager.execTop()).toBe(5);
  });
});
