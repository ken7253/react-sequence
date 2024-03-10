import { SequenceLine } from '.';
import { DroppableItem } from '../DroppableItem';
import { Meta, StoryObj } from '@storybook/react';

type Stroy = StoryObj<typeof SequenceLine>;

const meta: Meta<typeof SequenceLine> = {
  component: SequenceLine,
};

export default meta;

export const Default: Stroy = {
  args: {},
};

export const HasItem: Stroy = {
  args: {
    items: [<DroppableItem defaultTitle="title" />],
  },
};

export const HasManyItem: Stroy = {
  args: {
    items: [
      <DroppableItem defaultTitle="item-1" />,
      <DroppableItem defaultTitle="item-2" />,
      <DroppableItem defaultTitle="item-3" />,
    ],
  },
};
