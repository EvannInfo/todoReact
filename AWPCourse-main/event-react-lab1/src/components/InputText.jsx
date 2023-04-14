import React, { useState } from "react";

export function InputText(props) {
  const [input, setInput] = useState("");
  function onChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="card">
      <p>
        <input onChange={onChange} type="text" /> <br />
        <strong>state input</strong>: {input}
      </p>
    </div>
  );
}
