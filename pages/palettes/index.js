/* eslint-disable no-nested-ternary */
import useSWRInfinite from 'swr/infinite';
import Palette from '@components/colors/Palette';

const PAGE_SIZE = 6;

export default function Palettes() {
  const {
    data, error, size, setSize,
  } = useSWRInfinite(
    (index) => `/api/palettes?per_page=${PAGE_SIZE}&page=${
      index + 1
    }`,
  );

  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData
    || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <p>
        showing
        {' '}
        {size}
        {' '}
        page(s) of
        {' '}
        {isLoadingMore ? '...' : issues.length}
        {' '}
        issue(s)
        {' '}
        <button
          type="button"
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? 'loading...'
            : isReachingEnd
              ? 'no more issues'
              : 'load more'}
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
        {issues.map((v) => (
          <div className="flex flex-col">
            <div className="flex-1">
              <h3 key={v.name} className="text-base lg:text-lg leading-5 font-medium text-gray-900">
                {v.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {v.description}
              </p>
            </div>
            <div className="mt-2">
              <Palette colors={v.colors} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
