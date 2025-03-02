import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button'; // Ensure the default import

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hover: true,
    label: 'Button',
  },
};
