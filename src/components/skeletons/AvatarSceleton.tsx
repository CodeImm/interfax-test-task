import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function AvatarSceleton({ className, fill = 'currentColor', ...props }: Props) {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <svg
        className={`text-gray-200 ${className}`}
        aria-hidden="true"
        fill={fill}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
export default AvatarSceleton;
