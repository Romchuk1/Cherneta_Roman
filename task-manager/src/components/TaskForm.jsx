import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Нова задача"
      />
      <button onClick={submit}>Додати</button>
    </div>
  );
}

export default TaskForm;