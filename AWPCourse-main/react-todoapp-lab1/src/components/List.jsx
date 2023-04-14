import React, { useState } from "react";
import Task from "./Task";
import { useSnapshot } from "valtio";
import { store } from "../../store/store";
import { deleteTask } from "../../store/store";
import { editTask } from "../../store/store";
import { changeDone } from "../../store/store";

export default function List(props) {
  
  const snap = useSnapshot(store);

  const [sortBy, setSortBy] = useState("none");

  function compareTasks(task1, task2) {
    switch (sortBy) {
      case "title":
        return task1.text.localeCompare(task2.text);
      case "priority":
        return task2.priority - task1.priority;
      case "urgency":
        return task2.urgency - task1.urgency;
      default:
        return task2.done - task1.done;
    }
  }

  const sortedList = store.tasks.sort((a, b) => a.done - b.done || compareTasks(a, b));

  const incompleteTasks = store.tasks.filter((element) => !element.done);
  const completeTasks = store.tasks.filter((element) => element.done);
  const incompleteItems = incompleteTasks.map((element, index) => {
    let color = "";
    return (
      <li key={index} style={{ color: color }}>
        <Task
          index={index}
          task={element}
          changeDone={changeDone}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </li>
    );
  });

  const completeItems = completeTasks.map((element, index) => (
    <li key={index}>
      <Task
        index={incompleteTasks.length + index}
        task={element}
        changeDone={changeDone}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </li>
  ));

  return (
    <>
      <h3>Tasks</h3>
      <div style={{overflow : "auto",height : "55vh"}}>
      <p>Incomplete</p>
      <ol>{incompleteItems}</ol>
      <p>Complete</p>
      <ol>{completeItems}</ol>
      </div>
      
    </>
  );
}
