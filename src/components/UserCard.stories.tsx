import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import UserCard from './UserCard';

export default {
  title: 'UserCard',
  component: UserCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <MemoryRouter>
    <UserCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  to: '/',
  login: 'CodeImm',
  name: 'Даниил Колесников',
  avatarUrl: 'https://webmg.ru/wp-content/uploads/2022/05/i-104-5.jpeg',
};
