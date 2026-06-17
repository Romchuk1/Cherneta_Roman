import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API = "http://localhost:3001/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Помилка завантаження");
        setLoading(false);
      });
  }, []);

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = { title, completed: false };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setTitle("");
      });
  };

  const deleteTask = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (task) => {
    const updated = { completed: !task.completed };

    fetch(`${API}/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updated)
    });

    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Нова задача"
      />

      <button onClick={addTask}>Додати</button>

      <div>
        <button onClick={() => setFilter("all")}>Усі</button>
        <button onClick={() => setFilter("active")}>Активні</button>
        <button onClick={() => setFilter("completed")}>Виконані</button>
      </div>

      {loading && <p>Завантаження...</p>}
      {error && <p>{error}</p>}

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "✓" : "✗"}

            <button onClick={() => toggleTask(task)}>
              Змінити
            </button>

            <button onClick={() => deleteTask(task.id)}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;