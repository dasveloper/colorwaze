import { getPalettes } from '@services/palettes';

import Palette from '@components/colors/Palette';
import { Title, Button } from '@components/common';
import { colord, random } from 'colord';

import Link from 'next/link';
import Meta from '@components/Meta';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

export default function Home({ newestPalettes }) {
  const [color, setColor] = useColor('hex', '#121212');

  return (
    <>
      <Meta
        title="The Worlds Best Color Palettes | Colorwaze"
        description="Browse endless color palettes, explore millions of colors, and create your own with our color palette generator."
      />
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
          <Link href="/palettes" passHref>
            <Button size="xl" variant="light">Browse palettes</Button>
          </Link>
          {/* <Link href="/colors" passHref>
            <Button size="xl">Create palette</Button>
          </Link> */}
        </div>
      </div>
      <ColorPicker width="100%" height={300} color={color} onChange={setColor} hideHSV />
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>
            Newest color palettes
          </Title>
          <p className="mt-1 dimmed">
            Explore the newest color palettes created by the Colorwaze community
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
  const randomColor = random();
  const newestPalettes = await getPalettes({ limit: 10 });

  const numberRegex = /^[0-9]+$/;
  const amountRegex = /^(?!0\.00)[1-9]\d{0,2}(,\d{3})*(\.\d\d)?$/;
  const strip = (item) => item.replace(/['"]+/g, '');
  const clientData = responses.data.reduce((acc, el) => {
    const [number, type, amount] = Object.keys(el);
    if (number !== '' && type !== '' && amount !== '') {
      const formattedNumber = strip(number);
      const formattedType = strip(number).toLowerCase();
      const formattedAmount = strip(number);

      acc.concat({
        number: formattedNumber.match(numberRegex) ? Number(formattedNumber) : formattedNumber,
        type: (formattedType === 'increase' || formattedType === 'decrease') ? types : 'Null',
        amount: formattedAmount.match(amountRegex) ? formattedAmount : 0,
      });
    }
    return acc;
  }, []);

  return {
    props: {
      newestPalettes: JSON.parse(JSON.stringify(newestPalettes.results)),
      randomColor: randomColor.toHex(),
    },
    revalidate: 10,
  };
}
