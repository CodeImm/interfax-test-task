import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserHero from './UserHero';

export default {
  title: 'UserHero',
  component: UserHero,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserHero>;

const Template: ComponentStory<typeof UserHero> = (args) => (
  <UserHero {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  login: 'CodeImm',
  name: 'Даниил Колесников',
  avatarUrl: 'https://webmg.ru/wp-content/uploads/2022/05/i-104-5.jpeg',
};
