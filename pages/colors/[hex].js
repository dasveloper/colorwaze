import { colord, extend } from 'colord';
import DefaultErrorPage from 'next/error';
import Conversions from '@components/colors/Conversions';
import cmykPlugin from 'colord/plugins/cmyk';
import xyzPlugin from 'colord/plugins/xyz';
import hwbPlugin from 'colord/plugins/hwb';
import labPlugin from 'colord/plugins/lab';
import lchPlugin from 'colord/plugins/lch';
import ColorHero from '@components/colors/ColorHero';
import mixPlugin from 'colord/plugins/mix';
import Palette from '@components/colors/Palette';
import harmonies from 'colord/plugins/harmonies';
import Contrast from '@components/colors/Contrast';
import a11yPlugin from 'colord/plugins/a11y';
import Layout from '@components/Layout';
import { Title } from '@components/common';

extend([cmykPlugin, xyzPlugin, hwbPlugin, labPlugin, lchPlugin, mixPlugin, harmonies, a11yPlugin]);

function Color({ hex }) {
  const color = colord(`#${hex}`);
  if (!color.isValid()) {
    return <DefaultErrorPage statusCode={404} />;
  }
  const variationsMap = [
    {
      name: 'Shades',
      colors: color.shades(10),
      description: 'Shades are created by adding black to a color.',
    },
    {
      name: 'Tints',
      colors: color.tints(10),
      description: 'Tints are created by adding white to a color.',
    },
    {
      name: 'Tones',
      colors: color.tones(10),
      description: 'Tones are created by adding gray to a color.',
    },
  ];
  const harmoniesMap = [
    {
      name: 'Analogous',
      colors: color.harmonies('analogous'),
      description: 'Analogous colors are next to each other on the color wheel.',
    },
    {
      name: 'Complementary',
      colors: color.harmonies('complementary'),
      description: 'Complementary colors are opposite each other on the color wheel.',
    },
    {
      name: 'Split complementary',
      colors: color.harmonies('split-complementary'),
      description: 'Split complementary colors are analogous of the complementary color.',
    },

    {
      name: 'Rectangle',
      colors: color.harmonies('rectangle'),
      description: 'Rectangle colors are two pairs of complementary colors in a rectangular pattern on the color wheel.',
    },

    {
      name: 'Triadic',
      colors: color.harmonies('triadic'),
      description: 'Triadic colors are three colors equidistant to each other on the color wheel',
    },
    {
      name: 'Square',
      colors: color.harmonies('tetradic'),
      description: 'Square colors are two pairs of complementary colors in a square pattern on the color wheel.',
    },
  ];

  const opacities = [];
  for (let i = 0; i < 1; i += 0.1) {
    opacities.push(color.alpha(i));
  }

  return (
    <Layout>

      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={1}>
            {color.toHex()}
            {' '}
            hex color profile
          </Title>
        </div>
        <ColorHero color={color} />
      </section>

      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Conversions</Title>
          <p className="mt-1 dimmed">
            {color.toHex()}
            {' '}
            hex color
            {' '}
            converted to different color models.
          </p>
        </div>
        <Conversions color={color} />
      </section>

      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Variations</Title>
          <p className="mt-1 dimmed">
            {color.toHex()}
            {' '}
            hex color in different shades, tints, and tones.
          </p>
        </div>
        {variationsMap.map((v) => (
          <div key={v.name}>
            <Title order={3}>
              {v.name}
            </Title>
            <p className="mt-1 text-sm dimmed">
              {v.description}
            </p>
            <div className="mt-2">
              <Palette colors={v.colors} />
            </div>
          </div>
        ))}

      </section>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Harmonies</Title>
          <p className="mt-1 dimmed">
            {color.toHex()}
            {' '}
            hex color in different harmonies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          {harmoniesMap.map((v) => (
            <div key={v.name} className="flex flex-col">
              <div className="flex-1">
                <Title order={3}>
                  {v.name}
                </Title>
                <p className="mt-1 dimmed text-sm">
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
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Opacities</Title>
          <p className="mt-1 dimmed">
            {color.toHex()}
            {' '}
            hex color
            {' '}
            in different opacities from 0 to 1.
          </p>
        </div>
        <Palette colors={opacities} />
      </section>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Contrast</Title>
          <p className="mt-1 dimmed">
            {color.toHex()}
            {' '}
            hex color
            {' '}
            on white and black backgrounds.
          </p>
        </div>
        <Contrast color={color} />
      </section>
    </Layout>

  );
}

export default Color;

export async function getStaticPaths() {
  const paths = [].map(() => ({
    params: {},
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { hex } = params;
  return {
    props: {
      hex,
    },
    revalidate: 60,
  };
}
