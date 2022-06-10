/* eslint-disable jsx-a11y/label-has-associated-control */
import { Title, Button } from '@components/common';

import Link from 'next/link';
import Meta from '@components/Meta';
import { HexColorInput, RgbaColorPicker } from 'react-colorful';
import { useState, useEffect } from 'react';
import { random, colord } from 'colord';

export default function Home() {
  const [color, setColor] = useState('#ffffff');
  useEffect(() => {
    setColor(random().toHex());
  }, []);
  return (
    <>
      <Meta
        title="Explore over 16 million colors | Colorwaze"
        description="Browse endless colors, variations, names, and more with the largest color database."
      />
      <div className="text-center py-6 max-w-6xl mx-auto px-6">
        <Title order={1} className="xl:text-6xl">
          Millions of colors to explore
        </Title>
        <p className="mt-5 dimmed sm:text-lg md:text-xl">
          Discover new colors while learning about color names, variations, accessibility, and more!
        </p>
        <div className="mt-12 color-picker max-w-2xl mx-auto">
          <div className="flex w-full mb-4 space-x-4 align-bottom">
            <div className="rounded-md w-16 self-stretch border border-gray-300" style={{ background: color }} />
            <div className="flex-1">
              <div className="text-left border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label htmlFor="color-picker" className="sr-only">
                  Hex color
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    #
                  </div>
                  <HexColorInput
                    id="color-picker"
                    type="text"
                    color={color}
                    onChange={setColor}
                    className="p-0 pl-4  block w-full border-0 text-gray-900 placeholder-gray-500 focus:ring-0 text-sm sm:text-base"
                  />

                </div>

              </div>
            </div>
          </div>
          <RgbaColorPicker
            color={colord(color).toRgb()}
            onChange={(c) => setColor(colord(c).toHex())}
          />
        </div>
        <div className="mt-5 flex flex-col xs:flex-row xs:items-center xs:justify-center md:mt-8 space-y-6 xs:space-y-0 xs:space-x-6">
          <Link href={`/colors/${color.slice(1)}`} passHref>
            <Button size="xl" variant="light">
              View color
              {' '}
              {color}
            </Button>
          </Link>
        </div>

      </div>
      {/*
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={2}>
            Most likes colors
          </Title>
          <p className="mt-1 dimmed">
            Explore the newest color palettes created by the Colorwaze community
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          Temp
        </div>
      </section> */}
    </>
  );
}
