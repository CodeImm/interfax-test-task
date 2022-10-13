import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfoIcon from './InfoIcon';

export default {
  title: 'Icons/Info',
  component: InfoIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof InfoIcon>;

const Template: ComponentStory<typeof InfoIcon> = (args) => (
  <InfoIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
