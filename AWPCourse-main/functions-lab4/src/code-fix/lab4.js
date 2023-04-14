// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  return newTask;
}

function deleteTask(taskList, index) {
  return index;
}

function editTask(taskList, index, editedTask) {
  return editedTask;
}

function completeTask(taskList, index) {
  return index;
}

function clearCompletedTasks(taskList) {
  return taskList;
}

function sortTasksByDate(taskList) {
  return taskList;
}

function filterTasksByKeyword(taskList, keyword) {
  return taskList;
}

function getCompletedTasks(taskList) {
  return taskList;
}

function getIncompleteTasks(taskList) {
  return taskList;
}

function getTaskCount(taskList) {
  return taskList;
}

function getCompletedTaskCount(taskList) {
  return taskList;
}

function getIncompleteTaskCount(taskList) {
  return taskList;
}

function removeCompletedTasks(taskList) {
  return taskList;
}

function markAllTasksAsCompleted(taskList) {
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {
  return taskList;
}

function addTaskToList(taskList, task) {
  return task;
}

function deleteTaskFromList(taskList, index) {
  return index;
}

function editTaskInList(taskList, index, newTask) {
  return newTask;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  // const newIndex = index - 1;
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  // const newIndex = index + 1;
  return taskList;
}

module.exports = {
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
};
