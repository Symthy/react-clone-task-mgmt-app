import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import { Task } from './Task';
import { TaskData } from './type';
import styles from './Tasks.module.scss';
import { TaskAddInputForm } from './TaskAddInputForm';

export const Tasks = () => {
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

  const onDragEndSortTasks = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <>
      <TaskAddInputForm addTask={addTask} />
      <div className={styles.bl_tasks}>
        {tasks.length === 0 ? (
          <p className={styles.el_empty_text}>empty</p>
        ) : (
          <DragDropContext onDragEnd={onDragEndSortTasks}>
            <Droppable key='taskDroppable' droppableId='taskDroppable'>
              {(provided) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.map((task, i) => (
                    <div key={task.id}>
                      <Task index={i} task={task} removeTask={removeTask} />
                    </div>
                  ))}
                  <div>{provided.placeholder}</div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </>
  );
};
