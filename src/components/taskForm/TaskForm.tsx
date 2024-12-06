import React, { useState, useEffect, FC } from "react";
import { ITask } from "../../typings/task";
import './styles.scss';

interface ITaskFormProps {
    onSubmit: (task: ITask) => void;
    existingTask?: ITask | null;
}

export const TaskForm: FC<ITaskFormProps> = ({ onSubmit, existingTask }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskStatus, setTaskStatus] = useState("Новая");
    const [taskDate, setTaskDate] = useState("");

    useEffect(() => {
        if (existingTask) {
            setTaskTitle(existingTask.title);
            setTaskStatus(existingTask.status);
            setTaskDate(existingTask.date);
        } else {
            setTaskTitle("");
            setTaskStatus("Новая");
            setTaskDate("");
        }
    }, [existingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: ITask = {
            id: existingTask ? existingTask.id : Date.now(),
            title: taskTitle,
            status: taskStatus,
            date: taskDate,
        };
        onSubmit(newTask);

        if (!existingTask) {
            setTaskTitle("");
            setTaskStatus("Новая");
            setTaskDate("");
        }
    };

    return (
        <form className="task__form" onSubmit={handleSubmit}>
            <h3 className="task__form-title">{existingTask ? "Редактировать задачу" : "Добавить новую задачу"}</h3>
            <input
                type="text"
                className="task__form-input"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Название задачи"
                required
            />
            <select className="task__form-select" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
                <option value="Новая">Новая</option>
                <option value="В работе">В работе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <input
                type="date"
                className="task__form-input"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                required
            />
            <button type="submit" className="task__form-button task__form-button_submit">
                {existingTask ? "Сохранить" : "Добавить задачу"}
            </button>
        </form>
    );
};