import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import LoadingButton from './LoadingButton';

export default {
  title: 'LoadingButton',
  component: LoadingButton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = (args) => (
  <MemoryRouter>
    <LoadingButton {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Загрузить ещё',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Загрузить ещё',
  loading: true,
};
