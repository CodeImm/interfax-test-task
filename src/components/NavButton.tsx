import InputAdornment from 'components/InputAdornment';
import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends LinkProps {
  children: ReactNode;
  startIcon?: ReactNode;
}

function NavButton({ children, startIcon, className, ...props }: Props) {
  return (
    <Link
      type="button"
      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
      {...props}
    >
      {startIcon && (
        <InputAdornment className="pr-2">{startIcon}</InputAdornment>
      )}
      {children}
    </Link>
  );
}
export default NavButton;
