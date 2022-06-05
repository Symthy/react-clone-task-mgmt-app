import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Draggable } from 'react-beautiful-dnd';
import { TaskData } from './type';
import styles from './Task.module.scss';

type TaskProps = {
  index: number;
  task: TaskData;
  removeTask: (id: number) => void;
};

export const Task = ({ index, task, removeTask }: TaskProps) => (
  <Draggable index={index} draggableId={task.draggableId}>
    {(provided) => (
      <div
        className={styles.bl_task}
        key={task.id}
        ref={provided.innerRef}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...provided.draggableProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...provided.dragHandleProps}
      >
        <p className={styles.el_task_text}>{task.name}</p>
        <div className={styles.el_remove_btn}>
          <FontAwesomeIcon icon={faTrash} onClick={() => removeTask(task.id)} />
        </div>
      </div>
    )}
  </Draggable>
);
