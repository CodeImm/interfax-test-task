import { ElementType, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  component?: ElementType;
  scope?: 'col' | 'colgroup' | 'row' | 'rowgroup';
}

function TableCell({
  children,
  component: Tag = 'td',
  scope,
  className,
  ...props
}: Props) {
  return (
    <Tag className={` ${className}`} scope={scope} {...props}>
      {children}
    </Tag>
  );
}
export default TableCell;
