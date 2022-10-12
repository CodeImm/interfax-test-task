import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarSceleton from './Avatar';

export default {
  title: 'Skeletons/Avatar',
  component: AvatarSceleton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AvatarSceleton>;

const Template: ComponentStory<typeof AvatarSceleton> = (args) => (
  <AvatarSceleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
