import Palette from '@components/colors/Palette';
import { useRef, useEffect } from 'react';

import usePalettes from '@hooks/palettes';
import { Button, Title } from '@components/common';
import useIntersection from '@hooks/useIntersectionObserver';

export default function Palettes() {
  const loadMoreRef = useRef();
  const { data, nextPage, isLoading } = usePalettes();
  const [ref, observedEntry] = useIntersection({
    root: loadMoreRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (observedEntry?.isIntersecting && !isLoading) {
      nextPage();
    }
  }, [observedEntry?.isIntersecting, isLoading]);
  return (
    <>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>
            Discover your color palette
          </Title>
          <p className="mt-1 dimmed">
            Explore the thousands of color combinations contributed by the Colorwaze community
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {data.map((v) => (
            <Palette key={v._id} colors={v.colors} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button ref={ref} onClick={() => nextPage()} variant="light" size="lg">Load more</Button>
        </div>
      </section>
    </>
  );
}
