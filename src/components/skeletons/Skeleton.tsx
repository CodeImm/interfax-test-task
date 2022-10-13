import { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  srText?: string;
}

function Skeleton({
  srText = 'Загрузка...',
  className = 'h-2.5 w-full',
  ...props
}: Props) {
  return (
    <div
      role="status"
      className={`flex items-center space-y-8 animate-pulse md:space-y-0 md:space-x-8 `}
    >
      <div
        className={classNames(
          'bg-gray-200 rounded-md dark:bg-gray-700',
          className
        )}
        {...props}
      ></div>
      {srText && <span className="sr-only">{srText}</span>}
    </div>
  );
}
export default Skeleton;
