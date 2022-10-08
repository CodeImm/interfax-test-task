import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLDivElement> {}

function InputAdornment({ children, className, ...props }: Props) {
  return (
    <div
      className={`flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export default InputAdornment;
