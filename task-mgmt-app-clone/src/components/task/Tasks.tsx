import React from 'react';
import { Task } from './Task';
import { TaskData } from './type';
import styles from './Tasks.module.scss';

type TaskProps = {
  tasks: TaskData[];
  removeTask: (id: number) => void;
};

export const Tasks = ({ tasks, removeTask }: TaskProps) => (
  <div>
    <ul className={styles.bl_task_lines}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.bl_task_line}>
          <Task task={task} removeTask={removeTask} />
        </li>
      ))}
    </ul>
  </div>
);
