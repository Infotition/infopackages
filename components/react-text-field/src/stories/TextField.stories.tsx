import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextField } from '../components/TextField/TextField';
import styles from './index.module.scss';

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const container = {
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
};

console.log(styles);

const Template: ComponentStory<typeof TextField> = (args) => {
  return (
    <div style={container}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      </style>
      <TextField {...args} />
    </div>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  label: '',
  helper: 'Helper text',
  variant: 'outlined',
  type: 'text',
  full: false,
  required: true,
};
