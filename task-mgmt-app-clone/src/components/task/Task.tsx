import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskData } from './type';
import styles from './Task.module.scss';

type TaskProps = {
  task: TaskData;
  removeTask: (id: number) => void;
};

export const Task = ({ task, removeTask }: TaskProps) => (
  <div className={styles.bl_task}>
    <p className={styles.el_task_text}>{task.name}</p>
    <div className={styles.el_remove_btn}>
      <FontAwesomeIcon icon={faTrash} onClick={() => removeTask(task.id)} />
    </div>
  </div>
);
