import React, { ChangeEvent, useState } from 'react';
import styles from './TaskCardTitle.module.scss';

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [cardTitle, setCardTitle] = useState('Today');

  const onTitleClick = () => {
    setIsClick(true);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const onTitleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFocusOff();
  };

  const onFocusOff = () => {
    setIsClick(false);
  };

  return (
    <div className={styles.bl_card_title}>
      {isClick ? (
        <form onSubmit={onTitleSubmit} className={styles.el_title_input}>
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            type='text'
            onChange={onTitleChange}
            onBlur={onFocusOff}
            value={cardTitle}
            maxLength={16}
          />
        </form>
      ) : (
        <button className={styles.el_title_view} type='button' onClick={onTitleClick}>
          {cardTitle}
        </button>
      )}
    </div>
  );
};
