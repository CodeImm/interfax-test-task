import SearchField from 'components/SearchField';
import { useForm } from 'react-hook-form';

export interface SearchForm {
  username: string;
}

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form onSubmit={onSubmit}>
            <SearchField
              label="Найти"
              placeholder="Введите username"
              {...register('username', { required: true })}
            />
          </form>
        </div>
      </div>
    </>
  );
}
