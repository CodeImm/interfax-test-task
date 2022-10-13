import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTableSectionElement> {}

function TableHead({ children, className, ...props }: Props) {
  return (
    <thead className={`${className}`} {...props}>
      {children}
    </thead>
  );
}
export default TableHead;
