import React from 'react'
import { AddTaskCardBtn } from './button/AddTaskCardBtn';
import { TaskCard } from './TaskCard';
import styles from './TaskBoard.module.scss';

export const TaskBoard = () => (
    <div className={styles.bl_task_board}>
        <TaskCard />
        <AddTaskCardBtn />
    </div>
  )
