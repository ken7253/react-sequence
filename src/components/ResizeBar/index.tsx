import { DragEventHandler, FC, useState } from 'react';

import { TimeLineContext } from '../../context/TimeLineContext';
import styles from './style.module.css';

type Props = {
  onChangeHeight?: (moveY: number) => void;
};

export const ResizeBar: FC<Props> = ({ onChangeHeight }) => {
  const [dragStartY, setDragStartY] = useState(0);

  const dragStartHandler: DragEventHandler = (event) => {
    const { pageY } = event;
    setDragStartY(pageY);
  };

  const dragEndHandler: DragEventHandler = (event) => {
    const { pageY } = event;
    const moveY = pageY - dragStartY;
    onChangeHeight?.(moveY);
  };

  return <div draggable className={styles.resizeBar} onDragStart={dragStartHandler} onDragEnd={dragEndHandler} />;
};
