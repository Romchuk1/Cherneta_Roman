function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li>
      {task.title} - {task.completed ? "виконано" : "не виконано"}

      <button onClick={() => toggleTask(task)}>
        змінити
      </button>

      <button onClick={() => deleteTask(task.id)}>
        видалити
      </button>
    </li>
  );
}

export default TaskItem;