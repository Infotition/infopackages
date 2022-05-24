import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../components/Button/Button';
import styles from './index.module.scss';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const container = {
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
};

const trashIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

console.log(styles);

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div style={container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      </style>
      <Button {...args} />
    </div>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  label: 'OUTLINED',
  type: 'button',
  variant: 'contained',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'OUTLINED',
  type: 'button',
  variant: 'contained',
  startIcon: trashIcon,
  endIcon: trashIcon,
};
