import { Octokit } from 'octokit';

import {
  GithubCommitsProps,
  GithubRepoLisProps,
  GithubRepoProps,
  GithubUserProps,
} from 'REST/types';

const octokit = new Octokit();

export const ROOT_URI = 'https://api.github.com';

export const api = Object.freeze({
  users: {
    getUser: async ({ username }: GithubUserProps) => {
      try {
        const response = await octokit.request('GET /users/{username}', {
          username,
        });

        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getRepoList: async ({ username, page = 1 }: GithubRepoLisProps) => {
      try {
        const response = await octokit.request('GET /users/{username}/repos', {
          username,
          page,
        });

        return response.data;
      } catch (error) {
        throw error;
      }
    },
  },
  repos: {
    getCommits: async ({ username, repo, page = 1 }: GithubCommitsProps) => {
      try {
        const response = await octokit.request(
          'GET /repos/{owner}/{repo}/commits',
          {
            owner: username,
            repo,
            page,
          }
        );

        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getRepo: async ({ username, repo }: GithubRepoProps) => {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}', {
          owner: username,
          repo,
        });

        return response.data;
      } catch (error) {
        throw error;
      }
    },
  },
});
