import { HTMLAttributes } from 'react';
import classNames from 'classnames';

import GitBranchIcon from 'components/icons/GitBranchIcon';

interface Props extends HTMLAttributes<HTMLDivElement> {
  fullName: string;
  description: string | null;
  defaultBranch: string;
}

function RepoInfo({
  className,
  fullName,
  description,
  defaultBranch,
  ...props
}: Props) {
  return (
    <div
      className={classNames(
        'w-full text-sm text-left text-gray-500 dark:text-gray-400',
        className
      )}
      {...props}
    >
      <div className="mb-3">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {fullName}
        </h5>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>

      <div className="inline-flex items-center">
        <>
          <span className="pr-2">Branch:</span>
          <GitBranchIcon className="w-4 h-4 mr-0.5" stroke="#57606a" />
          {defaultBranch}
        </>
      </div>
    </div>
  );
}
export default RepoInfo;
