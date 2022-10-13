import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import CommitsTable from './CommitsTable';

import { GithubCommitsResp } from 'REST/types';

const mockData = [
  {
    sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',

    commit: { author: { name: 'Mr. Bunny', date: '2011-01-26T19:14:43Z' } },
  },
  {
    sha: '6dcb09b5b578dsfgsdfsdfsd695e2e4193db5e',

    commit: { author: { name: 'Donald Duck', date: '2012-06-14T19:14:43Z' } },
  },
] as unknown as GithubCommitsResp['data'];

export default {
  title: 'CommitsTable',
  component: CommitsTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CommitsTable>;

const Template: ComponentStory<typeof CommitsTable> = (args) => (
  <MemoryRouter>
    <CommitsTable {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  data: mockData,
  isLoading: false,
};
