import { SVGProps } from 'react';
import classNames from 'classnames';

interface Props extends SVGProps<SVGSVGElement> {}

function LoopIcon({
  stroke = 'currentColor',
  fill = 'none',
  className,
  ...props
}: Props) {
  return (
    <svg
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('flex-shrink-0 inline', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
}
export default LoopIcon;
