import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import Alert from 'components/Alert';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import NavButton from 'components/NavButton';
import ReposTableWithPagination from 'components/ReposTableWithPagination';
import UserHeroSkeleton from 'components/skeletons/UserHeroSkeleton';
import UserHero from 'components/UserHero';
import PageContainer from 'components/PageContainer';

import { api } from 'REST/api';

const PER_PAGE_DEFAULT = 30;

export default function ProfilePage() {
  const { username } = useParams();

  const { t } = useTranslation();

  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading } = useQuery(
    ['user', username],
    (params: { queryKey: any }) => {
      const [_key, username] = params.queryKey;
      return api.users.getUser({ username });
    },
    {
      onSuccess: (data) => {
        setNumPages(Math.ceil(data.public_repos / PER_PAGE_DEFAULT));
      },
      onError: (error: Error) => {
        if (error.message === 'Failed to fetch') {
          toast.error(t('failedToFetch'));
        } else if (error.message === 'Not Found') {
          error.message = t('userNotFound');
          toast.error(error.message);
        } else {
          toast.error(error.message);
        }
      },
      enabled: !!username,
    }
  );

  const {
    data: repos,
    isLoading: isReposLoading,
    isFetching: isReposFetching,
    isError: isReposError,
  } = useQuery(
    ['repos', username, page],
    (params: { queryKey: any }) => {
      const [_key, username] = params.queryKey;
      return api.users.getRepoList({ username, page });
    },
    {
      keepPreviousData: true,
      enabled: !!username,
    }
  );

  return (
    <>
      <PageContainer>
        <nav className="md:container flex mb-5 justify-self-start">
          <NavButton to="/" startIcon={<ArrowLeftIcon className="w-4 h-4" />}>
            {t('toSearchPage')}
          </NavButton>
        </nav>
        {isLoading ? (
          <UserHeroSkeleton className="mb-8" />
        ) : (
          <>
            {isSuccess && (
              <UserHero
                className="mb-8"
                avatarUrl={data?.avatar_url}
                alt={t('avatar')}
                login={data?.login}
                name={data?.name}
              />
            )}
          </>
        )}
        <div className="md:container mx-auto">
          {repos?.length === 0 ? (
            <Alert severity="dark">{t('publicRepositoriesNotFound')}</Alert>
          ) : (
            <div>
              <ReposTableWithPagination
                username={username}
                data={repos}
                isLoading={isReposLoading || isReposFetching}
                page={page}
                numPages={numPages}
                onPageChange={setPage}
              />
              {isReposError && (
                <Alert severity="danger">{t('failedToFetch')}</Alert>
              )}
            </div>
          )}
        </div>
      </PageContainer>
    </>
  );
}
