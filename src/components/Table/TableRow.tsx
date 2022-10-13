import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTableRowElement> {}

function TableRow({ children, className, ...props }: Props) {
  return (
    <tr className={`${className}`} {...props}>
      {children}
    </tr>
  );
}
export default TableRow;
