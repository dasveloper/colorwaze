import { getPalettes } from '@services/palettes';

import Palette from '@components/colors/Palette';

export default function Home({ newestPalettes }) {
  return (
    <>
      <div className="text-center py-10 max-w-6xl mx-auto px-6">
        <h1 className=" max-w-2xl mx-auto  text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Millions of color palettes and profiles to explore
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Browse endless hand crafted color palettes, or create your own to share with the world.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:items-center sm:justify-center md:mt-8 space-y-6 sm:space-y-0 sm:space-x-6">
          <a
            href="#"
            className="block items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Browse palettes
          </a>
          <a
            href="#"
            className="block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create palette
          </a>
        </div>
      </div>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">
            Best color palettes
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Explore the top color palettes voted on by the Colorwaze community
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          {newestPalettes.map((v) => (
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
      </section>

    </>
  );
}

export async function getStaticProps() {
  const newestPalettes = await getPalettes({ limit: 10 });

  return {
    props: {
      newestPalettes: JSON.parse(JSON.stringify(newestPalettes)),
    },
    revalidate: 10,
  };
}
