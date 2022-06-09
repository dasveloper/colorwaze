import useSWRInfinite from 'swr/infinite';

const getKey = (pageIndex, previousPageData) => {
  // End of list
  if (previousPageData && !previousPageData.next) return null;

  // first page, we don't have `previousPageData`
  if (pageIndex === 0) return '/api/palettes?limit=60';

  // add the cursor to the API endpoint
  return `/api/palettes?next=${previousPageData.next}&limit=60`;
};

const usePalettes = () => {
  const {
    data, size, setSize, mutate, error,
  } = useSWRInfinite(getKey);

  // Flatten results
  const results = data ? data.reduce((acc, d) => acc.concat(...d.results), []) : [];

  const nextPage = () => {
    console.log('NEXT PAGE!!!');
    setSize(size + 1);
  };
  return {
    data: results,
    nextPage,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default usePalettes;
