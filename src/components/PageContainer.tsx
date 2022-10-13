import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function PageContainer({
  className,
  children,

  ...props
}: Props) {
  return (
    <div
      className={classNames(
        'flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export default PageContainer;
