import { FC, useState } from 'react';

import { ResizeBar, SequenceBlock, SequenceLine } from '../src/components';
import { TimeLineContext } from '../src/context/TimeLineContext';

export const Example: FC = () => {
  const [itemHeight, setItemHeight] = useState(50);

  const timeLineHeightChangeHandler = (moveY: number) => {
    const HEIGHT_MINIMUM = 25;
    setItemHeight((prev) => {
      const nextSize = prev + moveY;
      return HEIGHT_MINIMUM > nextSize ? HEIGHT_MINIMUM : nextSize;
    });
  };

  return (
    <TimeLineContext.Provider value={{ height: itemHeight }}>
      <SequenceBlock resizeBar={<ResizeBar onChangeHeight={timeLineHeightChangeHandler} />}>
        {new Array(5).fill(null).map(() => (
          <SequenceLine />
        ))}
      </SequenceBlock>
    </TimeLineContext.Provider>
  );
};
