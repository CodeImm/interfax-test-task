import { forwardRef, HTMLProps } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import LoopIcon from 'components/icons/LoopIcon';
import Button from 'components/SearchField/Button';
import InputAdornment from 'components/InputAdornment';
import { SearchForm } from 'pages/Home';
import Label from 'components/SearchField/Label';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
}

const SearchField = forwardRef<
  HTMLInputElement,
  Props & ReturnType<UseFormRegister<SearchForm>>
>(({ id, label, ...props }, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <Label htmlFor={id} className="sr-only">
        {label}
      </Label>
      <div className="relative">
        <InputAdornment className="absolute inset-y-0 left-0 pl-3">
          <LoopIcon
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        </InputAdornment>
        <input
          id={id}
          type="search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props}
          ref={ref}
        />
        <Button className="absolute right-2.5 bottom-2.5" type="submit">
          {t('search')}
        </Button>
      </div>
    </>
  );
});

export default SearchField;
