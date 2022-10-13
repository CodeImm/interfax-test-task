import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  avatarUrl: string;
  alt: string;
  login: string;
  name: string | null;
}

function UserHero({ avatarUrl, alt, login, name, className, ...props }: Props) {
  return (
    <div
      className={`flex flex-col items-center text-center ${className}`}
      {...props}
    >
      <img
        src={avatarUrl}
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">{login}</h5>
      {name && <p className="text-gray-500">{name}</p>}
    </div>
  );
}
export default UserHero;
