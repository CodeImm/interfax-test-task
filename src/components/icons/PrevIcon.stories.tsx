import { ComponentStory, ComponentMeta } from '@storybook/react';

import PrevIcon from './Prev';

export default {
  title: 'Icons/PrevIcon',
  component: PrevIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PrevIcon>;

const Template: ComponentStory<typeof PrevIcon> = (args) => (
  <PrevIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
