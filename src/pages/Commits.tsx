import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import CommitsTable from 'components/CommitsTable';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import NavButton from 'components/NavButton';
import RepoInfo from 'components/RepoInfo';
import LoadingButton from 'components/LoadingButton';
import RepoInfoSkeleton from 'components/skeletons/RepoInfoSkeleton';
import Alert from 'components/Alert';
import PageContainer from 'components/PageContainer';

import { api } from 'REST/api';
import { GithubCommitsResp } from 'REST/types';

const PER_PAGE_DEFAULT = 30;

export default function ProfilePage() {
  const { username, repo } = useParams();

  const { t } = useTranslation();

  const [commits, setCommits] = useState<GithubCommitsResp['data']>([]);
  const [page, setPage] = useState(1);
  const [isAllCommitsloaded, setIsAllCommitsloaded] = useState(false);

  const {
    data: repoInfo,
    isLoading: isRepoInfoLoading,
    isSuccess: isRepoInfoSuccess,
  } = useQuery(
    ['repo', username, repo],
    (params: { queryKey: any }) => {
      const [_key, username, repo] = params.queryKey;
      return api.repos.getRepo({ username, repo });
    },
    {
      onError: (error: Error) => {
        if (error.message === 'Failed to fetch') {
          toast.error(t('failedToFetch'));
        } else if (error.message === 'Not Found') {
          error.message = t('repositoryNotFound');
          toast.error(error.message);
        } else {
          toast.error(error.message);
        }
      },
      enabled: !!username && !!repo,
    }
  );

  const { isError, isLoading, isFetching, error } = useQuery(
    ['commits', username, repo, page],
    (params: { queryKey: any }) => {
      const [_key, username, repo] = params.queryKey;
      return api.repos.getCommits({ username, repo, page });
    },
    {
      onError: (error: Error) => {
        if (error.message === 'Git Repository is empty.') {
          error.message = t('repositoryIsEmpty');
        } else {
          error.message = t('failedToFetch');
        }
      },
      onSuccess: (data) => {
        const isLastData = data.length === 0 || data.length < PER_PAGE_DEFAULT;
        if (isLastData) {
          setIsAllCommitsloaded(true);
        }
        if (data.length !== 0) {
          setCommits((prevState) => [...prevState, ...data]);
        }
      },
      enabled: !!username && !!repo,
    }
  );

  return (
    <>
      <PageContainer>
        <div className="sm:container mx-auto">
          <nav className="flex mb-5 justify-self-start">
            <NavButton
              to={`/${username}`}
              startIcon={<ArrowLeftIcon className="w-4 h-4" />}
            >
              {t('backward')}
            </NavButton>
          </nav>
          <div>
            {isRepoInfoLoading ? (
              <RepoInfoSkeleton />
            ) : (
              isRepoInfoSuccess && (
                <RepoInfo
                  className="mb-5"
                  fullName={repoInfo?.full_name}
                  description={repoInfo?.description}
                  defaultBranch={repoInfo?.default_branch}
                />
              )
            )}
            <CommitsTable
              className="mb-6"
              data={commits}
              isLoading={!commits.length && (isLoading || isFetching)}
            />
            {isError && (
              <Alert
                severity={
                  error.message === t('repositoryIsEmpty') ? 'dark' : 'danger'
                }
              >
                {error.message}
              </Alert>
            )}
            {!isAllCommitsloaded && !isError && (
              <div className="flex justify-center items-center">
                <LoadingButton
                  className="w-36 items-center"
                  onClick={() => {
                    setPage((prevState) => prevState + 1);
                  }}
                  loading={isLoading || isFetching}
                >
                  {t('downloadMore')}
                </LoadingButton>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </>
  );
}
