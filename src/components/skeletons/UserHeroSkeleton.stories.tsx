import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserHeroSkeleton from './UserHero';

export default {
  title: 'Skeletons/UserHero',
  component: UserHeroSkeleton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserHeroSkeleton>;

const Template: ComponentStory<typeof UserHeroSkeleton> = (args) => (
  <UserHeroSkeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
