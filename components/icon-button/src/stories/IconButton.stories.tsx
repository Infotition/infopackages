import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton } from '../components/IconButton/IconButton';
import styles from './index.module.scss';

console.log(styles);

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const container = {
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
};

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <div style={container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      </style>
      <IconButton {...args} />
    </div>
  );
};

const eye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const Simple = Template.bind({});
Simple.args = {
  icon: eye,
  disabled: false,
};
