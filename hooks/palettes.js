import useSWR from 'swr';

const usePalettes = (fallbackData) => {
  const { data, error, mutate } = useSWR('/api/palettes', { fallbackData: { palettes: fallbackData } });

  return {
    ...data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default usePalettes;
