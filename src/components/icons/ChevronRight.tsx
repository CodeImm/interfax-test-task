import { SVGProps } from 'react';
import classNames from 'classnames';

interface Props extends SVGProps<SVGSVGElement> {}

function ChevronRight({
  className,
  fill = 'currentColor',
  stroke = 'currentColor',
  ...props
}: Props) {
  return (
    <svg
      aria-hidden="true"
      className={classNames('flex-shrink-0 inline', className)}
      fill={fill}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
export default ChevronRight;
