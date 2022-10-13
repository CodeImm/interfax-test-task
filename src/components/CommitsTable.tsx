import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Skeleton from 'components/skeletons/Skeleton';
import TableBody from 'components/Table/TableBody';
import TableCell from 'components/Table/TableCell';
import TableHead from 'components/Table/TableHead';
import TableRow from 'components/Table/TableRow';
import Table from 'components/Table/Table';

import getISODateWithoutTimeZone from 'utils/getISODateWithoutTimeZone';

import { GithubCommitsResp } from 'REST/types';

interface Props extends HTMLAttributes<HTMLTableElement> {
  data?: GithubCommitsResp['data'];
  isLoading: boolean;
}

function CommitsTable({ className, data, isLoading, ...props }: Props) {
  const { t } = useTranslation();
  return (
    <Table
      className={classNames(
        'w-full text-sm text-left text-gray-500 dark:text-gray-400',
        className
      )}
      {...props}
    >
      <TableHead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <TableRow>
          <TableCell component="th" scope="col" className="py-3 px-6">
            {t('author')}
          </TableCell>
          <TableCell component="th" scope="col" className="py-3 px-6">
            {t('commitHash')}
          </TableCell>
          <TableCell component="th" scope="col" className="py-3 px-6">
            {t('date')}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {isLoading
          ? new Array(10).fill(undefined).map((_row, index) => (
              <TableRow
                key={index}
                className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <TableCell component="th" className="py-4 px-6">
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
          : data?.map((commit) => (
              <TableRow
                key={commit.sha}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {commit.commit.author?.name}
                </TableCell>
                <TableCell component="td" className="py-4 px-6">
                  {commit.sha}
                </TableCell>
                <TableCell component="td" className="py-4 px-6">
                  {commit.commit?.author?.date &&
                    getISODateWithoutTimeZone(
                      new Date(commit.commit.author.date)
                    )}
                </TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
}
export default CommitsTable;
