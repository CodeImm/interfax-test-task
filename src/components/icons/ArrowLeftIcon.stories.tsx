import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowLeftIcon from './ArrowLeft';

export default {
  title: 'Icons/ArrowLeft',
  component: ArrowLeftIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ArrowLeftIcon>;

const Template: ComponentStory<typeof ArrowLeftIcon> = (args) => (
  <ArrowLeftIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
