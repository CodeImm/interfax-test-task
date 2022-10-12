import { ComponentStory, ComponentMeta } from '@storybook/react';

import SpinnerIcon from './Spinner';

export default {
  title: 'Icons/Spinner',
  component: SpinnerIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SpinnerIcon>;

const Template: ComponentStory<typeof SpinnerIcon> = (args) => (
  <SpinnerIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
