/* eslint-disable jsx-a11y/label-has-associated-control */
import { colord, extend } from 'colord'
import Conversions from '@components/colors/Conversions'
import cmykPlugin from 'colord/plugins/cmyk'
import xyzPlugin from 'colord/plugins/xyz'
import hwbPlugin from 'colord/plugins/hwb'
import labPlugin from 'colord/plugins/lab'
import lchPlugin from 'colord/plugins/lch'
import ColorHero from '@components/colors/ColorHero'
import mixPlugin from 'colord/plugins/mix'
import Palette from '@components/colors/Palette'
import harmonies from 'colord/plugins/harmonies'
import Contrast from '@components/colors/Contrast'
import a11yPlugin from 'colord/plugins/a11y'
import { Title } from '@components/common'
import Meta from '@components/Meta'
import { useState, useEffect, useMemo } from 'react'
import useDebounce from '@hooks/useDebounce'
import { useRouter } from 'next/router'
import ColorPicker from '@components/ColorPicker'
import { getColorName } from '@services/colors'
import useColorName from '@hooks/useColorName'
import CoolorsCTA from '@components/CoolorsCTA'
// import colorNameList from 'color-name-list'

extend([cmykPlugin, xyzPlugin, hwbPlugin, labPlugin, lchPlugin, mixPlugin, harmonies, a11yPlugin])

function Color({ hex, initialColorName }) {
  const router = useRouter()
  const [colorPicker, setColorPicker] = useState(`#${hex}`)
  const dbcolor = useDebounce(colorPicker, 500)
  const { colorName } = useColorName(dbcolor, { colorName: initialColorName })

  const color = useMemo(() => colord(dbcolor), [dbcolor])

  useEffect(() => {
    router.push(`/colors/${color.toHex().slice(1)}`, undefined, { shallow: true })
  }, [color])

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
  ]
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
      description:
        'Rectangle colors are two pairs of complementary colors in a rectangular pattern on the color wheel.',
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
  ]

  const opacities = []
  for (let i = 0; i < 1; i += 0.1) {
    opacities.push(color.alpha(i))
  }

  const longName = colorName.distance === 0 ? colorName.name : `${color.toHex()} hex color`

  return (
    <>
      <Meta
        title={`${color.toHex()} Hex Color | ${colorName.name} Color Profile | Colorways`}
        description={`${longName} to Hex, RGB, CMYK, HSL, and more. ${longName} color palettes, contrast checker, color harmonies, and complete color profile.`}
      />
      <section className="space-y-4">
        <div className="text-center pb-12 border-b border-gray-300">
          <Title order={1}>
            {colorName && (
              <>
                <span className="inline-block mb-4">{`${colorName.distance > 0 ? '~' : ''}${colorName.name}`}</span>
                <br />
              </>
            )}
            <span className="dimmed font-medium">{color.toHex()} hex color profile </span>
          </Title>
          <div className="mt-8 max-w-xl mx-auto">
            <ColorPicker id="color-picker" prefixed alpha type="text" color={colorPicker} onChange={setColorPicker} />
          </div>
        </div>
        <ColorHero color={color} />
      </section>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Name</Title>
          <p className="mt-1 dimmed">
            {color.alpha() < 1 && `${color.toHex()} is a variant of the color ${color.alpha(1).toHex()}. `}
            {color.alpha(1).toHex()}{' '}
            {colorName.distance > 0
              ? 'does not have a known color name. Its closest matching color name is'
              : 'is an exact match to the known color name'}{' '}
            <strong>{colorName.name}</strong>.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          <div
            className={`${
              color.isLight() ? 'text-gray-900' : 'text-white'
            } h-48 rounded-lg flex flex-col items-center justify-center border border-gray-300 space-y-2`}
            style={{ backgroundColor: color.toHex() }}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold">{color.toHex()}</span>
          </div>
          <div
            className={`${
              colord(colorName.value).isLight() ? 'text-gray-900' : 'text-white'
            } h-48 rounded-lg flex flex-col items-center justify-center border border-gray-300 space-y-2`}
            style={{ backgroundColor: colorName.value }}
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold">{colorName.name}</span>
            <span className="text-md sm:text-lg ls">{colorName.value}</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Conversions</Title>
          <p className="mt-1 dimmed">{longName} converted to different color models.</p>
        </div>
        <Conversions color={color} />
      </section>

      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Variations</Title>
          <p className="mt-1 dimmed">{longName} in different shades, tints, and tones.</p>
        </div>
        {variationsMap.map(v => (
          <div key={v.name}>
            <Title order={3}>{v.name}</Title>
            <p className="mt-1 text-sm dimmed">{v.description}</p>
            <div className="mt-2">
              <Palette colors={v.colors} />
            </div>
          </div>
        ))}
      </section>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Harmonies</Title>
          <p className="mt-1 dimmed">{longName} in different harmonies.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          {harmoniesMap.map(v => (
            <div key={v.name} className="flex flex-col">
              <div className="flex-1">
                <Title order={3}>{v.name}</Title>
                <p className="mt-1 dimmed text-sm">{v.description}</p>
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
          <p className="mt-1 dimmed">{longName} in different opacities from 0 to 1.</p>
        </div>
        <Palette colors={opacities} />
      </section>
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>Contrast</Title>
          <p className="mt-1 dimmed">{color.alpha(1).toHex()} hex color on white and black backgrounds.</p>
        </div>
        <Contrast color={color.alpha(1)} />
      </section>
      <aside>
        <CoolorsCTA color={color} />
      </aside>
    </>
  )
}

export default Color

export async function getStaticPaths() {
  // const paths = colorNameList.map(color => ({
  //   params: { hex: color.hex.slice(1) },
  // }))
  const paths = [].map(color => ({
    params: { hex: color.hex.slice(1) },
  }))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const { hex } = params
  const color = colord(`#${hex}`)

  if (!color.isValid()) {
    return {
      notFound: true,
    }
  }

  const initialColorName = getColorName(color)
  return {
    props: {
      hex,
      initialColorName,
    },
    revalidate: 60,
  }
}
