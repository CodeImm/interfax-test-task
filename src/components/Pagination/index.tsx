import ChevronRight from 'components/icons/ChevronRight';
import ChevronLeftIcon from 'components/icons/ChevronLeft';
import PaginationControl from 'components/Pagination/Control';

interface Props {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

function Pagination({ count, page, onChange }: Props) {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px ">
        <li>
          <PaginationControl
            className="rounded-l-lg"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
            srText="Предыдущая"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </PaginationControl>
        </li>
        {new Array(count).fill(undefined).map((_page, index) => (
          <li>
            <PaginationControl
              onClick={() => onChange(index + 1)}
              active={page === index + 1}
            >
              {index + 1}
            </PaginationControl>
          </li>
        ))}
        <li>
          <PaginationControl
            className="rounded-r-lg"
            disabled={page === count}
            onClick={() => onChange(page + 1)}
            srText="Следующая"
          >
            <ChevronRight className="w-5 h-5" />
          </PaginationControl>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
