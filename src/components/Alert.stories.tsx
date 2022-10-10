import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoopIcon from 'components/icons/Loop';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>У данного пользователя нет публичных репозиториев.</Alert>
);

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = { severity: 'success' };

export const Dark = Template.bind({});
Dark.args = { severity: 'dark' };

export const Danger = Template.bind({});
Danger.args = { severity: 'danger' };

export const Warning = Template.bind({});
Warning.args = { severity: 'warning' };

export const Info = Template.bind({});
Info.args = { severity: 'info' };

export const WithoutIcon = Template.bind({});
WithoutIcon.args = { icon: false };

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  icon: <LoopIcon className="w-5 h-5 mr-3" />,
};
