import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchField from './index';

export default {
  title: 'SearchField',
  component: SearchField,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Поиск',
};
