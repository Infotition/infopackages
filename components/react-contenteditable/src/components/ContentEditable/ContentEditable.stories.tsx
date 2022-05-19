import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentEditable } from './ContentEditable';

export default {
  title: 'ContentEditable',
  component: ContentEditable,
} as ComponentMeta<typeof ContentEditable>;

const container = {
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
};

const Template: ComponentStory<typeof ContentEditable> = (args) => {
  return (
    <div style={container}>
      <ContentEditable {...args} />
    </div>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  html: 'Edit me!',
  style: { width: '50%' },
  Tag: 'div',
  readonly: false,
  lang: 'en',
  spellcheck: false,
  headless: false,
};
