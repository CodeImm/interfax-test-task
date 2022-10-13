import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ReposTableWithPagination from './ReposTableWithPagination';

import { UserRepoLisResp } from 'REST/types';

const mockData = [
  {
    name: 'RepoName1',
    language: 'TS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt velit cumque reiciendis libero laudantium totam dignissimos qui, obcaecati eaque porro eligendi commodi itaque! Accusamus quasi enim ipsum delectus voluptates.',
    stargazers_count: 2,
  },
  {
    name: 'RepoName2',
    language: 'JS',
    description: '',
    stargazers_count: 1_000_000,
  },
  {
    name: 'RepoName1',
    language: 'Cucumber',
    description: 'Lorem ipsum dolor sit am',
    stargazers_count: 0,
  },
] as UserRepoLisResp['data'];

export default {
  title: 'ReposTableWithPagination',
  component: ReposTableWithPagination,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ReposTableWithPagination>;

const Template: ComponentStory<typeof ReposTableWithPagination> = (args) => (
  <MemoryRouter>
    <ReposTableWithPagination {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  data: mockData,
  username: 'CodeImm',
  isLoading: false,
  page: 2,
  numPages: 4,
  onPageChange: (value: number) => console.log(value),
};
