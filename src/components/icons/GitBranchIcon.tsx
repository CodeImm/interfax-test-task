import { SVGProps } from 'react';
import classNames from 'classnames';

interface Props extends SVGProps<SVGSVGElement> {}

function GitBranchIcon({
  className,
  fill = 'none',
  stroke = 'currentColor',
  ...props
}: Props) {
  return (
    <svg
      aria-hidden="true"
      className={classNames('flex-shrink-0 inline', className)}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <path
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M68,160v-8.00018a23.99955,23.99955,0,0,1,23.99951-23.99909l72.001-.00146A23.99955,23.99955,0,0,0,188,104.00018V96"
      />
      <line
        x1="68"
        x2="68"
        y1="96"
        y2="160"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <circle
        cx="68"
        cy="188"
        r="28"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <circle
        cx="188"
        cy="67.998"
        r="28"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <circle
        cx="68"
        cy="67.998"
        r="28"
        fill={fill}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  );
}
export default GitBranchIcon;
