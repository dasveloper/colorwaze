import { Check, X } from 'phosphor-react';

export default function Contrast({ color }) {
  const contrast = color.contrast('#FFFFFF');
  const contrastBlack = color.contrast('#000000');

  const readableAA = color.isReadable('#FFFFFF');
  const readableAABlack = color.isReadable('#000000');

  const readableLargeAA = color.isReadable('#FFFFFF', { size: 'large' });
  const readableLargeAABlack = color.isReadable('#000000', { size: 'large' });

  const readableAAA = color.isReadable('#FFFFFF', { level: 'AAA' });
  const readableAAABlack = color.isReadable('#000000', { level: 'AAA' });

  const readableLargeAAA = color.isReadable('#FFFFFF', { level: 'AAA', size: 'large' });
  const readableLargeAAABlack = color.isReadable('#000000', { level: 'AAA', size: 'large' });

  const passColors = 'bg-green-100 text-green-800';
  const failColors = 'bg-red-100 text-red-800';

  return (
    <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
      <div className="space-y-2">
        <div className="ml-4 flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-6">
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Contrast</p>
            <div className="space-x-2 whitespace-nowrap">
              <p className="block text-base font-medium text-gray-900">{contrast}</p>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Normal text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableAA ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAA
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AA
              </span>
              <span className={`${readableAAA ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAAA
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AAA
              </span>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Large text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableLargeAA ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAA
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AA
              </span>
              <span className={`${readableLargeAAA ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAAA
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AAA
              </span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg w-full py-12 p-4 bg-white text-center flex flex-col items-center justify-center space-y-2" style={{ color: color.toHex() }}>
          <p className="text-2xl font-bold">Lorem Ipsum</p>
          <p className="text-base font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm font-thin">Quisque varius fringilla dolor ut viverra.</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="ml-4 flex flex-col space-y-2 xs:flex-row xs:space-y-0 xs:space-x-6">
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Contrast</p>
            <div className="space-x-2 whitespace-nowrap">
              <p className="block text-base font-medium text-gray-900">{contrastBlack}</p>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Normal text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableAABlack ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAABlack
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AA
              </span>
              <span className={`${readableAAABlack ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableAAABlack
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AAA
              </span>
            </div>
          </div>
          <div>
            <p className="block mb-1 text-xs font-medium text-gray-500">Large text</p>
            <div className="space-x-2 whitespace-nowrap">
              <span className={`${readableLargeAABlack ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableLargeAABlack
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AA
              </span>
              <span className={`${readableLargeAAABlack ? passColors : failColors} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                {readableLargeAAABlack
                  ? <Check weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />
                  : <X weight="bold" className="-ml-0.5 mr-1.5 h-3 w-3" />}
                {' '}
                AAA
              </span>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg w-full py-12  p-4 bg-black text-center flex flex-col items-center justify-center space-y-2" style={{ color: color.toHex() }}>
          <p className="text-2xl font-bold">Lorem Ipsum</p>
          <p className="text-base font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm font-thin">Quisque varius fringilla dolor ut viverra.</p>
        </div>
      </div>
    </div>
  );
}
