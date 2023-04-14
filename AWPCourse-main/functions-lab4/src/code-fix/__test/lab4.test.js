const {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
} = require("../lab4");

// Don't fix these tests - fix the code in lab4
describe("Test of Functions —lab4", () => {
  test("addTask should add new task to task list", () => {
    const taskList = ["task 1", "task 2"];
    const newTask = "task 3";
    expect(addTask(taskList, newTask)).toEqual(["task 1", "task 2", "task 3"]);
  });

  test("addTask should add new task to task list", () => {
    const taskList = ["task 1", "task 2"];
    const newTask = "task 3";
    expect(addTask(taskList, newTask)).toEqual(["task 1", "task 2", "task 3"]);
  });

  test("deleteTask should delete task from task list", () => {
    const taskList = ["task 1", "task 2", "task 3"];
    const index = 1;
    expect(deleteTask(taskList, index)).toEqual(["task 1", "task 3"]);
  });

  test("editTask should edit task in task list", () => {
    const taskList = ["task 1", "task 2", "task 3"];
    const index = 1;
    const editedTask = "edited task 2";
    expect(editTask(taskList, index, editedTask)).toEqual([
      "task 1",
      "edited task 2",
      "task 3",
    ]);
  });

  test("completeTask should mark task as completed", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ];
    const index = 1;
    expect(completeTask(taskList, index)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: false },
    ]);
  });

  test("clearCompletedTasks should remove all completed tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: false },
    ];
    expect(clearCompletedTasks(taskList)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 3", completed: false },
    ]);
  });

  test("sortTasksByDate should sort tasks by date", () => {
    const taskList = [
      {
        task: "task 1",
        completed: false,
        date: new Date("2023-03-07T00:00:00Z"),
      },
      {
        task: "task 2",
        completed: false,
        date: new Date("2023-03-06T00:00:00Z"),
      },
      {
        task: "task 3",
        completed: false,
        date: new Date("2023-03-05T00:00:00Z"),
      },
    ];

    expect(sortTasksByDate(taskList)).toEqual([
      {
        task: "task 3",
        completed: false,
        date: new Date("2023-03-05T00:00:00Z"),
      },
      {
        task: "task 2",
        completed: false,
        date: new Date("2023-03-06T00:00:00Z"),
      },
      {
        task: "task 1",
        completed: false,
        date: new Date("2023-03-07T00:00:00Z"),
      },
    ]);
  });

  test("filterTasksByKeyword should filter tasks by keyword", () => {
    const taskList = ["task 1", "another task", "Task 3", "yet another"];
    const keyword = "task";
    expect(filterTasksByKeyword(taskList, keyword)).toEqual([
      "task 1",
      "another task",
      "Task 3",
    ]);
  });

  test("getCompletedTasks should return all completed tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ];
    expect(getCompletedTasks(taskList)).toEqual([
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ]);
  });

  test("getIncompleteTasks should return all incomplete tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: false },
    ];
    expect(getIncompleteTasks(taskList)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 3", completed: false },
    ]);
  });

  test("getTaskCount should return the total number of tasks", () => {
    const taskList = ["task 1", "task 2", "task 3"];
    expect(getTaskCount(taskList)).toBe(3);
  });

  test("getCompletedTaskCount should return the total number of completed tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ];
    expect(getCompletedTaskCount(taskList)).toBe(2);
  });

  test("getIncompleteTaskCount should return the total number of incomplete tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: false },
    ];
    expect(getIncompleteTaskCount(taskList)).toBe(2);
  });

  test("removeCompletedTasks should remove all completed tasks", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ];
    expect(removeCompletedTasks(taskList)).toEqual([
      { task: "task 1", completed: false },
    ]);
  });

  test("markAllTasksAsCompleted should mark all tasks as completed", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ];
    expect(markAllTasksAsCompleted(taskList)).toEqual([
      { task: "task 1", completed: true },
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ]);
  });

  test("markAllTasksAsIncomplete should mark all tasks as incomplete", () => {
    const taskList = [
      { task: "task 1", completed: true },
      { task: "task 2", completed: true },
      { task: "task 3", completed: true },
    ];
    expect(markAllTasksAsIncomplete(taskList)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ]);
  });

  test("addTaskToList should add a new task to the list", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ];
    const task = "task 4";

    expect(addTaskToList(taskList, task)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
      { task: "task 4", completed: false },
    ]);
  });

  test("deleteTaskFromList should delete a task at a given index", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ];
    const index = 1;
    expect(deleteTaskFromList(taskList, index)).toEqual([
      { task: "task 1", completed: false },
      { task: "task 3", completed: false },
    ]);
  });

  test("editTaskInList should edit a task at a given index", () => {
    const taskList = [
      { task: "task 1", completed: false },
      { task: "task 2", completed: false },
      { task: "task 3", completed: false },
    ];
    const index = 1;
    const newTask = "updated task";
    expect(editTaskInList(taskList, index, newTask)).toEqual([
      { task: "task 1", completed: false },
      { task: "updated task", completed: false },
      { task: "task 3", completed: false },
    ]);
  });

  test("moveTaskUp should move a task up by one index", () => {
    const taskList = ["task 1", "task 2", "task 3"];
    const index = 1;
    expect(moveTaskUp(taskList, index)).toEqual(["task 2", "task 1", "task 3"]);
  });

  test("moveTaskDown should move a task down by one index", () => {
    const taskList = ["task 1", "task 2", "task 3"];
    const index = 1;
    expect(moveTaskDown(taskList, index)).toEqual([
      "task 1",
      "task 3",
      "task 2",
    ]);
  });
});
