import React, { ChangeEvent } from 'react';
import styles from './TaskAddInputForm.module.scss';

export const TaskAddInputForm = () => {
  const onAddSubmit = (e: ChangeEvent<HTMLFormElement>) => {};

  return (
    <div>
      <form onSubmit={onAddSubmit} className={styles.el_add_input}>
        <input type='text' placeholder='add task' />
      </form>
    </div>
  );
};
