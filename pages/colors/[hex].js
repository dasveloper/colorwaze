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
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        <section className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <h3 className="text-3xl lg:text-4xl leading-7 font-bold text-gray-900">
              {color.toHex()}
              {' '}
              hex color
            </h3>
          </div>
          <ColorHero color={color} />
        </section>

        <section className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">Conversions</h2>
            <p className="mt-1 text-sm text-gray-500">
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
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">Variations</h2>
            <p className="mt-1 text-sm text-gray-500">
              {color.toHex()}
              {' '}
              hex color in different shades, tints, and tones.
            </p>
          </div>
          {variationsMap.map((v) => (
            <div>
              <h3 key={v.name} className="text-base lg:text-lg leading-5 font-medium text-gray-900">
                {v.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {v.description}
              </p>
              <div className="mt-2">
                <Palette colors={v.colors} />
              </div>
            </div>
          ))}

        </section>
        <section className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">Harmonies</h2>
            <p className="mt-1 text-sm text-gray-500">
              {color.toHex()}
              {' '}
              hex color in different harmonies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
            {harmoniesMap.map((v) => (
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
        <section className="space-y-4">
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">Opacities</h2>
            <p className="mt-1 text-sm text-gray-500">
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
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl lg:text-2xl leading-6 font-medium text-gray-900">Contrast</h2>
            <p className="mt-1 text-sm text-gray-500">
              {color.toHex()}
              {' '}
              hex color
              {' '}
              on white and black backgrounds.
            </p>
          </div>
          <Contrast color={color} />
        </section>
      </div>
    </div>
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
