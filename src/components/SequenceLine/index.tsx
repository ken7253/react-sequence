import { useContext, type FC, type PropsWithChildren } from 'react';

import { TimeLineContext } from '../../context/TimeLineContext';
import styles from './style.module.css';

type Props = PropsWithChildren;

export const SequenceLine: FC<Props> = ({ children }) => {
  const { height } = useContext(TimeLineContext);

  const defineCSSVariable = {
    '--timeline-height': `${height}px`,
  };

  return <div style={defineCSSVariable} className={styles.container}></div>;
};
