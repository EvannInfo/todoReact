import React, { useState } from "react";
import { editTask } from "../../store/store";
import { store } from "../../store/store";
import { navigate } from "raviger";

export default function EditTodo(props) {

  const task = store.tasks[props.id];
  const [newTitle, setNewTitle] = useState(task.text);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);
  const [newPriority, setNewPriority] = useState(task.priority);

  function handleSubmit(event) {
    event.preventDefault();
    editTask(props.id, newTitle, newDescription, newDueDate, newPriority);
    navigate("/");
  }

  return (

    <form onSubmit={handleSubmit}>
      <h1>Editing : {newTitle}</h1>
      <div style={{ display: "flex" }}>
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            required
          />
          <div style={{ height: "15px" }}></div>
          <div>Description :</div>
          <input style={{ width: "550px" }}
            type="text"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
            required
          />
          <div style={{ height: "15px" }}></div>
          <div>DueDate :</div>
          <input
            type="date"
            value={newDueDate}
            onChange={(event) => setNewDueDate(event.target.value)}
            required
          />
          <div style={{ height: "15px" }}></div>
          <div>Priority :</div>
          <select value={newPriority} onChange={(event) => setNewPriority(event.target.value)}>
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <button type="submit">Save</button>
        </div>
      </div>
    </form>);
}
