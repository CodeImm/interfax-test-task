import { Endpoints } from '@octokit/types';

export type GithubCommitsResp =
  Endpoints['GET /repos/{owner}/{repo}/commits']['response'];
export type GithubCommitsProps = {
  username: string;
  repo: string;
  page?: number;
};

export type GithubRepoResp = Endpoints['GET /repos/{owner}/{repo}']['response'];
export type GithubRepoProps = {
  username: string;
  repo: string;
};

export type UserRepoLisResp =
  Endpoints['GET /users/{username}/repos']['response'];
export type GithubRepoLisProps = {
  username: string;
  page?: number;
};

export type UserReq = Endpoints['GET /users/{username}']['request'];
export type UserResp = Endpoints['GET /users/{username}']['response'];
export type GithubUserProps = {
  username: string;
};
