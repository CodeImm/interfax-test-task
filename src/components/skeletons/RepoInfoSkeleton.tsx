import { HTMLAttributes } from 'react';

import classNames from 'classnames';

import GitBranchIcon from 'components/icons/GitBranchIcon';
import Skeleton from 'components/skeletons/Skeleton';

interface Props extends HTMLAttributes<HTMLDivElement> {}

function RepoInfoSkeleton({ className, ...props }: Props) {
  return (
    <div
      className={classNames(
        'w-full text-sm text-left text-gray-500',
        className
      )}
      {...props}
    >
      <div className="mb-3">
        <Skeleton className="h-7 w-40 mb-2 flex" />
        <Skeleton className="h-5 w-96 mb-1" />
      </div>

      <div className="inline-flex items-center">
        <>
          <span className="pr-2">Branch:</span>
          <GitBranchIcon className="w-4 h-4 mr-0.5" stroke="#57606a" />
          <Skeleton className="h-6 w-16" />
        </>
      </div>
    </div>
  );
}
export default RepoInfoSkeleton;
