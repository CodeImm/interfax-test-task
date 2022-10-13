import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTableSectionElement> {}

function TableBody({ children, className, ...props }: Props) {
  return (
    <tbody className={`${className}`} {...props}>
      {children}
    </tbody>
  );
}
export default TableBody;
