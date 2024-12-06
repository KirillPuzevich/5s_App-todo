import React, { FC } from "react";

import { TaskRow } from "../taskRow/TaskRow";
import './styles.scss';
import { ITask } from "../../typings/task";

interface ITaskTableProps {
  tasks: ITask[];
  onEdit: (task: ITask) => void;
  onDelete: (id: number) => void;
}

const TaskTable: FC<ITaskTableProps> = ({ tasks, onEdit, onDelete }) => (
  <table className="task__table">
    <thead>
      <tr className="task__table-header">
        <th className="task__table-columns">ID</th>
        <th className="task__table-columns">Название задачи</th>
        <th className="task__table-columns">Статус</th>
        <th className="task__table-columns">Дата создания</th>
        <th className="task__table-columns">Действия</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <TaskRow key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </tbody>
  </table>
);

export default TaskTable;
