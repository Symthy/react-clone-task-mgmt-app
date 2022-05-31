import React from 'react'
import { DeleteTaskCardBtn } from './button/DeleteTaskCardBtn'
import { TaskAddInput } from './TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'
import styles from './TaskCard.module.scss'

export const TaskCard = () => (
    <div className={styles.el_task_card}>
        <TaskCardTitle />
        <DeleteTaskCardBtn />
        <TaskAddInput />
        <Tasks />
    </div>
  )
