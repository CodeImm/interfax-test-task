import { ReactNode } from 'react';
import classNames from 'classnames';

import InfoIcon from 'components/icons/InfoIcon';

type SeverityType = 'dark' | 'danger' | 'info' | 'success' | 'warning';

const SEVERITY_MAPS: Record<SeverityType, string> = {
  dark: 'text-gray-700 bg-gray-100 rounded-lg',
  danger:
    'text-red-700 bg-red-100 rounded-lg',
  info: ' text-blue-700 bg-blue-100 rounded-lg',
  success:
    'text-green-700 bg-green-100 rounded-lg',
  warning:
    'text-yellow-700 bg-yellow-100 rounded-lg',
};

interface Props {
  children: ReactNode;
  className?: string;
  srText?: string;
  severity?: SeverityType;
  icon?: false | ReactNode;
}

function Alert({
  children,
  severity = 'success',
  icon,
  className,
  srText = 'Информация',
  ...props
}: Props) {
  return (
    <div
      className={classNames(
        'flex p-4 text-sm',
        SEVERITY_MAPS[severity],
        className
      )}
      role="alert"
      {...props}
    >
      {icon !== false && (icon || <InfoIcon className="w-5 h-5 mr-3" />)}
      <span className="sr-only">{srText}</span>
      <div>{children}</div>
    </div>
  );
}

export default Alert;
