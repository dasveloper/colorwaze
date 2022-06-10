/* eslint-disable jsx-a11y/label-has-associated-control */
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import Meta from '@components/Meta';
import { Check, X } from 'phosphor-react';
import {
  useState,
} from 'react';
import ColorPicker from '@components/ColorPicker';
import { Title } from '@components/common';

extend([a11yPlugin]);

function AccessibilityTester() {
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setbackgroundColor] = useState('#ffffff');
  const textColord = colord(textColor);
  const backgroundColord = colord(backgroundColor);

  const contrast = textColord.contrast(backgroundColord);
  const readableAA = textColord.isReadable(backgroundColord);
  const readableAAA = textColord.isReadable(backgroundColord, { level: 'AAA' });
  const readableLargeAA = textColord.isReadable(backgroundColord, { size: 'large' });
  const readableLargeAAA = textColord.isReadable(backgroundColord, { level: 'AAA', size: 'large' });
  const passColors = 'bg-green-100 text-green-800';
  const failColors = 'bg-red-100 text-red-800';

  return (
    <>
      <Meta
        title="WCAG 2.0 Color Contrast Tester | Colorways"
        description="Check your color combinations against WCAG 2.0 accessibility guidelines to determine if your text is readable on your background colors."
      />
      <section className="space-y-4">
        <div className="pb-4 border-b border-gray-300">
          <Title order={1}>
            Color contrast tester
          </Title>
          <p className="mt-1 dimmed">
            Adjust the text and background colors to test the contrast against
            {' '}
            <a className="underline" href="https://www.w3.org/TR/WCAG20/" target="_black" rel="noreferrer noopener">WCAG 2.0 accessibility guidelines</a>
            .
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
          <ColorPicker isHex color={textColor} onChange={setTextColor} showLabel label="Text color" />
          <ColorPicker isHex color={backgroundColor} onChange={setbackgroundColor} showLabel label="Background color" />
        </div>
      </section>
      <section>
        <div className="ml-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-12">
          <div>
            <p className="block mb-1 text-sm font-medium text-gray-500">Contrast</p>
            <div className="space-x-2 whitespace-nowrap">
              <p className="block text-lg font-medium text-gray-900">{contrast}</p>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-sm font-medium text-gray-500">Normal text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableAA ? passColors : failColors} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800`}>
                {readableAA
                  ? <Check weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />
                  : <X weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />}
                {' '}
                WCAG AA
              </span>
              <span className={`${readableAAA ? passColors : failColors} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800`}>
                {readableAAA
                  ? <Check weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />
                  : <X weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />}
                {' '}
                WCAG AAA
              </span>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-sm font-medium text-gray-500">Large text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableLargeAA ? passColors : failColors} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800`}>
                {readableLargeAA
                  ? <Check weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />
                  : <X weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />}
                WCAG AA
              </span>
              <span className={`${readableLargeAAA ? passColors : failColors} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800`}>
                {readableLargeAAA
                  ? <Check weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />
                  : <X weight="bold" className="-ml-1 mr-1.5 h-4 w-4" />}
                WCAG AAA
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 p-8 space-y-6 rounded-lg border" style={{ background: backgroundColord.toHex() }}>
          <p style={{ fontSize: '18pt', fontWeight: 'regular', color: textColord.toHex() }}>Large Text (18pt): Lorem ipsum dolor sit amet</p>
          <p style={{ fontSize: '14pt', fontWeight: 'bold', color: textColord.toHex() }}>Large Text (14pt Bold): Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p style={{ fontSize: '12pt', fontWeight: 'regular', color: textColord.toHex() }}>
            Normal Text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat odio a sapien euismod ullamcorper. Donec vel lacus eget ligula fringilla porta. Donec sapien mauris, viverra sit amet libero vel, molestie pellentesque est. Praesent porttitor quam quis pulvinar venenatis. Nam cursus enim et sapien congue, id dictum massa posuere. Aenean eleifend condimentum mattis. Mauris felis ligula, aliquam vitae lobortis sed, placerat quis dolor. Nulla scelerisque hendrerit dui vel egestas. Curabitur tincidunt viverra nunc, at ornare neque aliquam vitae. Donec tristique at lorem tristique dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod nec ex ac ultrices.
          </p>
        </div>
      </section>

    </>
  );
}

export default AccessibilityTester;
