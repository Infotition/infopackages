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
