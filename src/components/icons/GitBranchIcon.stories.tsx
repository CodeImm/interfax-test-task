import { ComponentStory, ComponentMeta } from '@storybook/react';

import GitBranchIcon from './GitBranch';

export default {
  title: 'Icons/GitBranchIcon',
  component: GitBranchIcon,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof GitBranchIcon>;

const Template: ComponentStory<typeof GitBranchIcon> = (args) => (
  <GitBranchIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
