import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  active?: boolean;
  srText?: string;
}

const ACTIVE =
  'z-10 text-blue-600 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
const DEFAULT =
  'text-gray-500 bg-white border-gray-300 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 disabled:text-gray-200 disabled:border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';

function PaginationControl({
  children,
  className,
  srText,
  disabled,
  active = false,
  ...props
}: Props) {
  return (
    <button
      className={classNames(
        'flex py-2 px-3 ml-0 leading-tight border',
        active ? ACTIVE : DEFAULT,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {srText && <span className="sr-only">{srText}</span>}
    </button>
  );
}
export default PaginationControl;
