import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChevronLeftIcon from './ChevronLeftIcon';

export default {
  title: 'Icons/ChevronLeft',
  component: ChevronLeftIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ChevronLeftIcon>;

const Template: ComponentStory<typeof ChevronLeftIcon> = (args) => (
  <ChevronLeftIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
