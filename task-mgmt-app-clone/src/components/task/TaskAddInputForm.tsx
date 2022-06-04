import React, { ChangeEvent, useState } from 'react';
import styles from './TaskAddInputForm.module.scss';

type TaskAddInputFormProps = {
  addTask: (taskName: string) => void;
};

export const TaskAddInputForm = ({ addTask }: TaskAddInputFormProps) => {
  const [inputText, setInputText] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onAddSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText !== '') {
      addTask(inputText);
    }
    setInputText('');
  };

  return (
    <div>
      <form onSubmit={onAddSubmit} className={styles.el_add_input}>
        <input onChange={onChangeInput} type='text' placeholder='add task' value={inputText} />
      </form>
    </div>
  );
};
