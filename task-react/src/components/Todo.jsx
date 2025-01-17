import { useState } from "react";
import "./Todo.css";
import Header from "./header/Header";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskName, setEditTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName === "") {
      alert("Task name cannot be empty!");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      dateTime: new Date().toLocaleString(),
    };

    setTasks((prevTasks) => [ newTask,...prevTasks]);
    setTaskName("");
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, name) => {
    setEditTaskId(id);
    setEditTaskName(name);
  };

  const handleSaveTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: editTaskName } : task
      )
    );
    setEditTaskId(null);
    setEditTaskName(""); 
  };

  return (
    <>
    <Header>ToDo List</Header>
    <div className="todo-container">
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>
      {tasks.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Date & Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>
                  {editTaskId === task.id ? (
                    <input
                      type="text"
                      value={editTaskName}
                      onChange={(e) => setEditTaskName(e.target.value)}
                      className="edit-input"
                    />
                  ) : (
                    task.name
                  )}
                </td>
                <td>{task.dateTime}</td>
                <td>
                  {editTaskId === task.id ? (
                    <button
                      onClick={() => handleSaveTask(task.id)}
                      className="save-button"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditTask(task.id, task.name)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-tasks">No tasks added yet!</p>
      )}
    </div>
    </>
  );
};

export default Todo;
