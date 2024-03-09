import { Example } from '.';
import { Meta, StoryObj } from '@storybook/react';

type Stroy = StoryObj<typeof Example>;

const meta: Meta<typeof Example> = {
  component: Example,
  title: 'Example',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: Stroy = {
  args: {},
};
