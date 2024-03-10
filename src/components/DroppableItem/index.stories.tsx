import { DroppableItem } from '.';
import { Meta, StoryObj } from '@storybook/react';

type Stroy = StoryObj<typeof DroppableItem>;

const meta: Meta<typeof DroppableItem> = {
  component: DroppableItem,
  argTypes: {},
};

export default meta;

export const Default: Stroy = {
  args: {
    defaultTitle: 'Default',
    children: <p>content</p>,
  },
};
