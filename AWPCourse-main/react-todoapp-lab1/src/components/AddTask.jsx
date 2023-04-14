import React, { useState } from "react";
import { addTask } from "../../store/store";

export default function AddTask(props) {
  // const { addTask } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    addTask(title, description, dueDate, priority);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority(1);
  }

  return (
    <div style={{display : "flex", justifyContent : "center"}}>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title" style={{marginRight : "10px"}}>Title:</label>
        <input style={{marginRight : "20px"}}
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        required
        />
        <label htmlFor="dueDate" style={{marginRight : "10px"}}>Due Date:</label>
        <input style={{marginRight : "20px"}}
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          required
          />
        <label htmlFor="priority" style={{marginRight : "10px"}}>Priority:</label>
        <select style={{marginRight : "20px"}} id="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      <div>
        <label htmlFor="description" style={{marginRight : "10px"}}>Description:</label>
        <input style={{ width : "470px"}}
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          />
      <button type="submit">Add Task</button>
      </div>
    </form>
    </div>
  );
}
