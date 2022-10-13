import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChevronRightIcon from './ChevronRightIcon';

export default {
  title: 'Icons/ChevronRight',
  component: ChevronRightIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChevronRightIcon>;

const Template: ComponentStory<typeof ChevronRightIcon> = (args) => (
  <ChevronRightIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
