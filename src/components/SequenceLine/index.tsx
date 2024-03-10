import { useContext, type FC, type PropsWithChildren, ReactElement } from 'react';

import { TimeLineContext } from '../../context/TimeLineContext';
import styles from './style.module.css';

type Props = {
  items?: ReactElement[];
};

export const SequenceLine: FC<Props> = ({ items }) => {
  const { height } = useContext(TimeLineContext);

  const defineCSSVariable = {
    '--timeline-height': `${height}px`,
  };

  return (
    <div style={defineCSSVariable} className={styles.container}>
      {items}
    </div>
  );
};
