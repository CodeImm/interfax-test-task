import { ComponentStory, ComponentMeta } from '@storybook/react';

import NextIcon from './Next';

export default {
  title: 'Icons/NextIcon',
  component: NextIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NextIcon>;

const Template: ComponentStory<typeof NextIcon> = (args) => (
  <NextIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
