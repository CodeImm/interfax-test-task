import { ComponentMeta, ComponentStory } from '@storybook/react';

import RepoInfo from './RepoInfo';

export default {
  title: 'RepoInfo',
  component: RepoInfo,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof RepoInfo>;

const Template: ComponentStory<typeof RepoInfo> = (args) => (
  <RepoInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  fullName: 'CodeImm/interfax',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quisquam laboriosam, assumenda quas veniam, dolorum adipisci ratione quae perferendis modi unde eius voluptatem architecto illo ipsa odit voluptates reprehenderit molestias?',
  defaultBranch: 'master',
};
