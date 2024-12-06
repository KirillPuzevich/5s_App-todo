import React, { useEffect, useState } from "react";
import './styles.scss';
import { TaskForm } from "../taskForm/TaskForm";
import { ITask } from "../../typings/task";
import { EditModal } from "../editTaskModal/EditModal";
import TaskTable from "../taskTable/TaskTable";

export const TaskList = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isEditing, setIsEditing] = useState<ITask | null>(null);
  const [nextId, setNextId] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
      const maxId = parsedTasks.reduce((max: number, task: ITask) => Math.max(max, task.id), 0);
      setNextId(maxId + 1);
    }
  }, []);

  const handleAddTask = (task: ITask) => {
    const newTask = { ...task, id: nextId };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNextId(nextId + 1);
  };

  const handleEditTask = (task: ITask) => {
    const updatedTasks = tasks.map(t => (t.id === task.id ? task : t));
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditing(null);
    setIsModalVisible(false);
  };

  const deleteTask = (id: number) => {
    if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
      const updatedTasks = tasks.filter(task => task.id !== id);
      const reindexedTasks = updatedTasks.map((task, index) => ({
        ...task,
        id: index + 1
      }));
      setTasks(reindexedTasks);
      localStorage.setItem("tasks", JSON.stringify(reindexedTasks));
      setNextId(reindexedTasks.length + 1);
    }
  };

  const startEditing = (task: ITask) => {
    setIsEditing(task);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setIsEditing(null);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value);
  };

  const filteredTasks = statusFilter === "all"
    ? tasks
    : tasks.filter(task => task.status === statusFilter);

  return (
    <div className="task__list">
      <div className="container">
        <h2 className="task__list-title">Список задач</h2>
        <TaskForm onSubmit={handleAddTask} existingTask={null} />

        <div className="task__list-filter">
          <label htmlFor="statusFilter" className="task__list-filter_label">Фильтровать по статусу:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={handleFilterChange}
            className="task__list-filter_select"
          >
            <option value="all">Все</option>
            <option value="Новая">Новая</option>
            <option value="В работе">В работе</option>
            <option value="Завершена">Завершена</option>
          </select>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="task__list-message">Задачи со статусом "{statusFilter}" нет</p>
        ) : (
          <TaskTable tasks={filteredTasks} onEdit={startEditing} onDelete={deleteTask} />
        )}

        <EditModal
          visible={isModalVisible}
          task={isEditing}
          onClose={closeModal}
          onSubmit={handleEditTask}
        />
      </div>
    </div>
  );
};