import { DetailedHTMLProps, ReactNode } from 'react';

interface Props
  extends DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode;
}

function Label({ children, className, ...props }: Props) {
  return (
    <label
      className={`mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
export default Label;
