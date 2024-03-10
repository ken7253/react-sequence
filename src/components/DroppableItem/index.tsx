import { ChangeEventHandler, FC, PropsWithChildren, useState } from 'react';

import styles from './style.module.css';
import { Icon } from '@iconify/react';

type Props = PropsWithChildren<{
  defaultTitle: string;
}>;

export const DroppableItem: FC<Props> = ({ defaultTitle, children }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(defaultTitle);

  const titleChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTitle(target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header} draggable={!editMode}>
        <input type="text" value={title} disabled={!editMode} className={styles.title} onChange={titleChangeHandler} />
        <label className={styles.editTitle} onChange={() => setEditMode((prev) => !prev)}>
          <input type="checkbox" />
          <Icon icon="material-symbols:edit-outline-rounded" />
        </label>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
