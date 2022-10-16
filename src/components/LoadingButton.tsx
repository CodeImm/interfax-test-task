import { HTMLAttributes, ReactNode } from 'react';

import SpinnerIcon from 'components/icons/SpinnerIcon';
import IconWrapper from 'components/IconWrapper';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

function LoadingButton({ children, loading, className, ...props }: Props) {
  return (
    <button
      className={classNames(
        'w-full text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
        loading
          ? 'border-gray-700 bg-gray-200'
          : 'hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <IconWrapper className="pr-2">
          <SpinnerIcon />
        </IconWrapper>
      ) : (
        children
      )}
    </button>
  );
}
export default LoadingButton;
