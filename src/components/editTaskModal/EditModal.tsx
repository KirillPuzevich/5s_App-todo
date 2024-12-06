import React, { useEffect, FC } from "react";
import './styles.scss';
import { TaskForm } from "../taskForm/TaskForm";
import { ITask } from "../../typings/task";

interface EditModalProps {
    visible: boolean;
    task: ITask | null;
    onClose: () => void;
    onSubmit: (task: ITask) => void;
}

export const EditModal: FC<EditModalProps> = ({ visible, task, onClose, onSubmit }) => {
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="edit__modal">
            <div className="edit__modal-content">
                <TaskForm onSubmit={onSubmit} existingTask={task} />
                <button className="edit__modal-close" onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};