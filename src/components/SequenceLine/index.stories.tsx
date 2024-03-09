import { Meta, StoryObj } from '@storybook/react';
import { SequenceLine } from '.';

type Stroy = StoryObj<typeof SequenceLine>;

const meta: Meta<typeof SequenceLine> = {
  component: SequenceLine,
};

export default meta;

export const Default: Stroy = {
  args: {},
};
