import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function ArrowLeftIcon({
  className,
  stroke = 'currentColor',
  fill = 'currentColor',
  ...props
}: Props) {
  return (
    <svg
      className={`flex-shrink-0 inline ${className}`}
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      ></path>
    </svg>
  );
}
export default ArrowLeftIcon;
