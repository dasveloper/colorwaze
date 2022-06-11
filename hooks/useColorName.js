import useSWR from 'swr';

const useColorName = (color, fallbackData) => {
  const { data, error, mutate } = useSWR(`/api/colors/${color.replace('#', '')}/name`, { fallbackData: { ...fallbackData } });

  return {
    ...data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useColorName;
