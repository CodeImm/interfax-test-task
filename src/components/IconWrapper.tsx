import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  srText?: string;
}

function IconWrapper({ children, srText, ...props }: Props) {
  return (
    <div role="status" {...props}>
      {children}
      <span className="sr-only">{srText}</span>
    </div>
  );
}
export default IconWrapper;
