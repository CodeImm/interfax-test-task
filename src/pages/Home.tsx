import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Alert from 'components/Alert';
import SpinnerIcon from 'components/icons/SpinnerIcon';
import SearchField from 'components/SearchField';
import IconWrapper from 'components/IconWrapper';
import UserCard from 'components/UserCard';
import PageContainer from 'components/PageContainer';

import { api } from 'REST/api';

export interface SearchForm {
  username: string;
}

export default function HomePage() {
  const { register, handleSubmit } = useForm<SearchForm>();

  const onSubmit = handleSubmit(({ username }) => {
    toast.dismiss();
    reset();
    mutate({ username });
  });

  const { mutate, data, error, isError, isLoading, reset } = useMutation(
    api.users.getUser,
    {
      onError: (error: Error, variables) => {
        if (error.message === 'Failed to fetch') {
          toast.error('Ошибка загрузки');
          error.message = '';
        } else if (error.message === 'Not Found') {
          error.message = `Пользователь "${variables.username}" не найден. Попробуйте найти другого пользователя в системе github.com`;
        } else {
          toast.error(error.message);
          error.message = '';
        }
      },
    }
  );

  return (
    <>
      <PageContainer>
        <div className="mb-10 w-full max-w-md space-y-8">
          <h1 className="mb-2 text-center text-xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
            Поиск пользователя{' '}
            <mark className="px-2 text-white bg-gray-700 rounded dark:bg-blue-500">
              github.com
            </mark>
          </h1>
          <form onSubmit={onSubmit}>
            <SearchField
              label="Найти"
              placeholder="Введите имя пользователя"
              {...register('username', { required: true })}
            />
          </form>
        </div>
        <div className="flex items-center">
          {isLoading ? (
            <div className="p-4 text-center">
              <IconWrapper role="status" srText="Загрузка...">
                <SpinnerIcon className="h-8 w-8" />
              </IconWrapper>
            </div>
          ) : (
            <>
              {isError && error.message && (
                <Alert severity="dark">{error?.message}</Alert>
              )}
              {data && (
                <>
                  <UserCard
                    avatarUrl={data.avatar_url}
                    name={data.name}
                    login={data.login}
                    to={`/${data.login}`}
                  />
                </>
              )}
            </>
          )}
        </div>
      </PageContainer>
    </>
  );
}
