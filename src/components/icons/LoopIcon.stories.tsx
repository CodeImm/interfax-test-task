import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoopIcon from './Loop';

export default {
  title: 'Icons/Loop',
  component: LoopIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoopIcon>;

const Template: ComponentStory<typeof LoopIcon> = (args) => (
  <LoopIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
