import React, { useState } from 'react';
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn';
import { TaskAddInputForm } from './TaskAddInputForm';
import { TaskCardTitle } from './TaskCardTitle';
import { Tasks } from './Tasks';
import styles from './TaskCard.module.scss';

export const TaskCard = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask = (newTask: string) => {
    tasks.push(newTask);
    setTasks(tasks);
  };

  return (
    <div className={styles.el_task_card}>
      <TaskCardTitle />
      <DeleteTaskCardBtn />
      <TaskAddInputForm />
      <Tasks />
    </div>
  );
};
