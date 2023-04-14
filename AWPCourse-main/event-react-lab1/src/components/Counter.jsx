import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [toto, setBar] = useState(0);
  const [foo, setFoo] = useState({ name: "mohamed" });
  const [tasks, setTasks] = useState(["blabla"]);

  return (
    <div className="card" style={{background: "red"}}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
