import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  avatarUrl: string;
  name: string | null;
  login: string;
}
// TODO: заменить scope type

function UserCard({ avatarUrl, name, login, className, ...props }: Props) {
  return (
    <Link
      className={classNames(
        'flex p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-4 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700',
        className
      )}
      {...props}
    >
      <div className="inline-flex h-full items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={login} />
        <div className="flex flex-col font-medium dark:text-white">
          <div>{login}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{name}</div>
        </div>
      </div>
    </Link>
  );
}
export default UserCard;
