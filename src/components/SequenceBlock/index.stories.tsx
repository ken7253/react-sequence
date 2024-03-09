import { SequenceBlock } from '.';
import { ResizeBar } from '../ResizeBar';
import { SequenceLine } from '../SequenceLine';
import { Meta, StoryObj } from '@storybook/react';

type Stroy = StoryObj<typeof SequenceBlock>;

const createLines = (size: number) => {
  return new Array(size).fill(null).map(() => <SequenceLine />);
};

const meta: Meta<typeof SequenceBlock> = {
  component: SequenceBlock,
  argTypes: {
    resizeBar: {
      control: false,
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: Stroy = {
  args: {
    resizeBar: <ResizeBar />,
    children: createLines(5),
  },
};
