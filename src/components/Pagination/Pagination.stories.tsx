import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './index';

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 5,
  page: 3,
};
