import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn';
import { TaskAddInputForm } from './TaskAddInputForm';
import { TaskCardTitle } from './TaskCardTitle';
import styles from './TaskCard.module.scss';
import { TaskData } from './type';
import { Tasks } from './Tasks';

export const TaskCard = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const addTask = (newTaskName: string) => {
    const taskId: string = uuid();
    setTasks([
      ...tasks,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        name: newTaskName,
      },
    ]);
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const reorderTasks = (startIndex: number, endIndex: number) => {
    const remove = tasks.splice(startIndex, 1);
    tasks.splice(endIndex, 0, remove[0]);
    setTasks(tasks);
  };

  return (
    <div className={styles.el_task_card}>
      <TaskCardTitle />
      <DeleteTaskCardBtn />
      <TaskAddInputForm addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} reorderTasks={reorderTasks} />
    </div>
  );
};
