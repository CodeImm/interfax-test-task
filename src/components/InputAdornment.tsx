import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLDivElement> {}

function InputAdornment({ children, className, ...props }: Props) {
  return (
    <div
      className={`flex items-center pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export default InputAdornment;
