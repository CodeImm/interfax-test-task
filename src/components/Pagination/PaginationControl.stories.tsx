import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChevronRightIcon from 'components/icons/ChevronRightIcon';

import PaginationControl from './Control';

export default {
  title: 'PaginationControl',
  component: PaginationControl,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PaginationControl>;

const Template: ComponentStory<typeof PaginationControl> = (args) => (
  <PaginationControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '1',
};

export const Active = Template.bind({});
Active.args = {
  children: '1',
  active: true,
};

export const RoundedDisabled = Template.bind({});
RoundedDisabled.args = {
  children: <ChevronRightIcon className="w-5 h-5" />,
  className: 'rounded-r-lg',
  disabled: true,
};
