import { ComponentStory, ComponentMeta } from '@storybook/react';

import RepoInfoSkeleton from './RepoInfoSkeleton';

export default {
  title: 'Skeletons/RepoInfo',
  component: RepoInfoSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RepoInfoSkeleton>;

const Template: ComponentStory<typeof RepoInfoSkeleton> = (args) => (
  <RepoInfoSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
