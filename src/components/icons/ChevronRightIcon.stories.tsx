import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChevronRight from './ChevronRight';

export default {
  title: 'Icons/ChevronRight',
  component: ChevronRight,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChevronRight>;

const Template: ComponentStory<typeof ChevronRight> = (args) => (
  <ChevronRight {...args} />
);

export const Default = Template.bind({});
Default.args = {};
