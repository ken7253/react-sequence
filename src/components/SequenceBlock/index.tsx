import { useState, type FC, type PointerEventHandler, type ReactElement, CSSProperties } from 'react';

import { margeArray } from '../../util/margeArray';
import styles from './style.module.css';

type Props = {
  length?: number;
  resizeBar: ReactElement;
  children: ReactElement[];
};

export const SequenceBlock: FC<Props> = ({ length = 100, resizeBar, children }) => {
  const [guideLineVisible, setGuideLineVisible] = useState(false);
  const [guideLinePosition, setGuideLinePosition] = useState(0);

  const defineCSSVariable: CSSProperties = {
    '--guideline-display-type': guideLineVisible ? 'block' : 'none',
    '--guideline-display-position': `${guideLinePosition}px`,
  };

  const pointerEnterHandler: PointerEventHandler = () => {
    setGuideLineVisible(true);
  };

  const pointerMoveHandler: PointerEventHandler = (event) => {
    const { pageX } = event;
    setGuideLinePosition(pageX);
  };

  const pointerLeaveHandler: PointerEventHandler = () => {
    setGuideLineVisible(false);
  };

  const insertedResizeBar = margeArray(children, new Array(children.length).fill(resizeBar));

  return (
    <div
      style={defineCSSVariable}
      onPointerEnter={pointerEnterHandler}
      onPointerMove={pointerMoveHandler}
      onPointerLeave={pointerLeaveHandler}
      className={styles.container}
    >
      <ul className={styles.header}>
        {new Array(length).fill(0).map((_, i) => (
          <li className={styles.marker} key={i}>
            {i + 1}
          </li>
        ))}
      </ul>
      {insertedResizeBar}
    </div>
  );
};
