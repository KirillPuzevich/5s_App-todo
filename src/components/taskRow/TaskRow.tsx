import React, { FC } from "react";
import { ITask } from "../../typings/task";
import './styles.scss';

interface TaskRowProps {
  task: ITask;
  onEdit: (task: ITask) => void;
  onDelete: (id: number) => void;
}

export const TaskRow: FC<TaskRowProps> = ({ task, onEdit, onDelete }) => (
  <tr className={`task__row task__row-${task.id}`}>
    <td className="task__row-item" data-label="ID:">{task.id}</td>
    <td className="task__row-item" data-label="Название задачи:" title={task.title}>{task.title}</td>
    <td className="task__row-item" data-label="Статус:">{task.status}</td>
    <td className="task__row-item" data-label="Дата создания:">{task.date}</td>
    <td className="task__row-item actions" data-label="Действия:">
      <div className="task__row-container">
        <button className="task__row-button task__row-button_edit" onClick={() => onEdit(task)}>Редактировать</button>
        <button className="task__row-button task__row-button_delete" onClick={() => onDelete(task.id)}>Удалить</button>
      </div>
    </td>
  </tr>
);
