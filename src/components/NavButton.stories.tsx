import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';

import NavButton from './NavButton';

export default {
  title: 'NavButton',
  component: NavButton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => (
  <MemoryRouter>
    <NavButton {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Назад',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Назад',
  startIcon: <ArrowLeftIcon className="w-4 h-4" />,
};
