import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Skeleton from 'components/skeletons/Skeleton';
import TableBody from 'components/Table/TableBody';
import TableCell from 'components/Table/TableCell';
import TableHead from 'components/Table/TableHead';
import TableRow from 'components/Table/TableRow';
import Table from 'components/Table/Table';
import Pagination from 'components/Pagination';

import { UserRepoLisResp } from 'REST/types';

interface Props extends HTMLAttributes<HTMLTableElement> {
  data?: UserRepoLisResp['data'];
  username?: string;
  isLoading: boolean;
  page: number;
  numPages: number;
  onPageChange: (value: number) => void;
}

function ReposTableWithPagination({
  className,
  data,
  username,
  isLoading,
  page,
  numPages,
  onPageChange,
  ...props
}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Table
        className={classNames(
          'mb-4 text-sm text-left text-gray-500 dark:text-gray-400',
          className
        )}
        {...props}
      >
        <TableHead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <TableRow>
            <TableCell component="th" scope="col" className="py-3 px-6">
              {t('name')}
            </TableCell>
            <TableCell component="th" scope="col" className="py-3 px-6">
              {t('programmingLanguage')}
            </TableCell>
            <TableCell component="th" scope="col" className="py-3 px-6">
              {t('description')}
            </TableCell>
            <TableCell component="th" scope="col" className="py-3 px-6">
              {t('stargazersCount')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading
            ? new Array(5).fill(undefined).map((_row, index) => (
                <TableRow
                  key={index}
                  className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Skeleton />
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Skeleton />
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Skeleton />
                  </TableCell>
                  <TableCell className="py-4 px-6">
                    <Skeleton />
                  </TableCell>
                </TableRow>
              ))
            : data?.map((repo) => (
                <TableRow
                  key={repo.name}
                  className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link
                      to={`/${username}/${repo.name}`}
                      className="block w-full"
                    >
                      {repo.name}
                    </Link>
                  </TableCell>
                  <TableCell className="py-4 px-6">{repo.language}</TableCell>
                  <TableCell className="py-4 px-6">
                    {repo.description}
                  </TableCell>
                  <TableCell
                    className={`py-4 px-6 align-middle ${
                      repo.stargazers_count && repo.stargazers_count > 0
                        ? 'font-medium'
                        : ''
                    }`}
                  >
                    <span className="text-lg">☆</span> {repo.stargazers_count}
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

      <div className="flex justify-center">
        {isLoading ? (
          <Skeleton className="h-9 w-48 rounded-l-lg rounded-r-lg " />
        ) : (
          numPages > 1 &&
          data && (
            <div className="flex justify-center">
              <Pagination
                count={numPages}
                page={page}
                onChange={onPageChange}
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
export default ReposTableWithPagination;
