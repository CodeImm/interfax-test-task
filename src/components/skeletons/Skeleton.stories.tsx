import { ComponentStory, ComponentMeta } from '@storybook/react';

import Skeleton from './Skeleton';

export default {
  title: 'Skeletons/Text',
  component: Skeleton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithSpecifiedWidth = Template.bind({});
WithSpecifiedWidth.args = { className: 'w-6/12 h-2.5' };

export const WithSpecifiedHeight = Template.bind({});
WithSpecifiedHeight.args = { className: 'h-10 w-full' };
