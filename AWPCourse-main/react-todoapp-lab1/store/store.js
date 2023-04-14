import { proxy } from "valtio";

export const store = proxy({
  tasks: [
    {
      text: "Learn React",
      done: false,
      priority: 1,
      description: "Complete the React tutorial on the official website",
      dueDate: "2023-04-20",
    },
  ],
  initialTasks: [
    {
      text: "Learn React",
      done: false,
      priority: 1,
      description: "Complete the React tutorial on the official website",
      dueDate: "2023-04-20",
    },
  ],
  showIncomplete: true,
  searchText: "",
});

export function addTask(title, description, dueDate, priority) {
  const task = {
    text: title,
    description: description,
    dueDate: dueDate,
    done: false,
    priority: priority || 1,
  };
  store.initialTasks = [...store.tasks, task];
  store.tasks = [...store.tasks, task];
}

export function editTask(index, newTitle, newDescription, newDueDate, newPriority) {
  const newTasks = [...store.tasks];
  newTasks[index].text = newTitle;
  newTasks[index].description = newDescription;
  newTasks[index].dueDate = newDueDate;
  newTasks[index].priority = newPriority;
  store.tasks = newTasks;
  store.initialTasks = newTasks;
}

export function changeDone(index) {
  store.tasks[index].done = !store.tasks[index].done;
  console.log();

  if (store.tasks[index].done) {
    console.log("1");
  } else {
    console.log("12");
  }
}


export function deleteTask(index) {
  const newTasks = [...store.tasks];
  newTasks.splice(index, 1);
  store.tasks = newTasks;
  store.initialTasks = newTasks;
}

export function sortByPriority() {
  const newTasks = [...store.tasks];
  newTasks.sort((a, b) => a.priority - b.priority);
  newTasks.reverse();
  store.tasks = newTasks;
  store.initialTasks = newTasks;
}

export function sortByTitle() {
  const newTasks = [...store.tasks];
  newTasks.sort((a, b) => a.text.localeCompare(b.text));
  store.tasks = newTasks;
  store.initialTasks = newTasks;
}

export function filterDate() {
  store.tasks = store.initialTasks;
  // const date = new Date();
  // let day = date.getDate();
  // let month = date.getMonth() + 1;
  // let year = date.getFullYear();
  // let currentDate = `${day}/${month}/${year}`;
  // console.log(currentDate);
  const newTasks = store.tasks.filter((task) => task.dueDate == "2023-04-14");
  store.tasks = newTasks;
  store.showIncomplete = false;
}

export function sortByLow() {
  store.tasks = store.initialTasks;
  const newTasks = store.tasks.filter((task) => task.priority == 1);
  store.tasks = newTasks;
  store.showIncomplete = false;
}
export function sortByMedium() {
  store.tasks = store.initialTasks;
  const newTasks = store.tasks.filter((task) => task.priority == 2);
  store.tasks = newTasks;
  store.showIncomplete = false;
}
export function sortByHigh() {
  store.tasks = store.initialTasks;
  const newTasks = store.tasks.filter((task) => task.priority == 3);
  store.tasks = newTasks;
  store.showIncomplete = false;
}

export function filterIncomplete() {
  store.tasks = store.initialTasks;
  const newTasks = store.tasks.filter((task) => !task.done);
  store.tasks = newTasks;
  store.showIncomplete = false;
}

export function resetTasks() {
  store.showIncomplete = true;
  store.tasks = store.initialTasks;
}

export function searchTasks(element) {
  const newTasks = store.initialTasks.filter((task) =>
    task.text.toLowerCase().includes(element.toLowerCase())
  );
  store.tasks = newTasks;
}