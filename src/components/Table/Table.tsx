import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTableElement> {}

function Table({ children, className, ...props }: Props) {
  return (
    <table className={`w-full ${className}`} {...props}>
      {children}
    </table>
  );
}
export default Table;
