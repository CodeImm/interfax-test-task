import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ id, ...props }: Props) {
  return (
    <input
      id={id}
      type="search"
      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      {...props}
    />
  );
}
export default Input;
