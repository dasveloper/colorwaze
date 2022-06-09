import { getPalettes } from '@services/palettes';

import Palette from '@components/colors/Palette';
import { Title, Button } from '@components/common';

import Link from 'next/link';

export default function Home({ newestPalettes }) {
  return (
    <>
      <div className="text-center py-8 max-w-6xl mx-auto px-6">
        <Title order={1} className="xl:text-6xl">
          Millions of color palettes
          <br />
          {' '}
          and profiles to explore
        </Title>
        <p className="mt-5 dimmed sm:text-lg md:text-xl">
          Browse endless hand crafted color palettes,
          <br className="lg:hidden" />
          {' '}
          or create your own to share with the world.
        </p>
        <div className="mt-5 flex flex-col xs:flex-row xs:items-center xs:justify-center md:mt-8 space-y-6 xs:space-y-0 xs:space-x-6">
          <Link href="/colors" passHref>
            <Button size="xl" variant="light">Browse palettes</Button>
          </Link>
          <Link href="/colors" passHref>
            <Button size="xl">Create palette</Button>
          </Link>
        </div>
      </div>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>
            Best color palettes
          </Title>
          <p className="mt-1 dimmed">
            Explore the top color palettes voted on by the Colorwaze community
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          {newestPalettes.map((v) => (
            <Palette key={v.color} colors={v.colors} />
          ))}
        </div>
      </section>

    </>
  );
}

export async function getStaticProps() {
  const newestPalettes = await getPalettes({ skip: 0, limit: 10 });

  return {
    props: {
      newestPalettes: JSON.parse(JSON.stringify(newestPalettes)),
    },
    revalidate: 10,
  };
}
