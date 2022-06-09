export default function Contrast({ color }) {
  const contrast = color.contrast('#FFFFFF');
  const contrastBlack = color.contrast('#000000');

  const readableAA = color.isReadable('#FFFFFF');
  const readableAABlack = color.isReadable('#000000');
  const readableAAA = color.isReadable('#FFFFFF', { level: 'AAA' });
  const readableAAABlack = color.isReadable('#000000', { level: 'AAA' });
  const passColors = 'bg-green-100 text-green-800';
  const failColors = 'bg-red-100 text-red-800';

  return (
    <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-xs font-medium">
            Contrast:
            {' '}
            {contrast}
          </p>
          <div className="space-x-2 whitespace-nowrap">
            <span className={`${readableAA ? passColors : failColors}inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium `}>
              WCAG AA
            </span>
            <span className={`${readableAAA ? passColors : failColors}inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium `}>
              WCAG AAA
            </span>
          </div>
        </div>
        <div className="border border-gray-300 rounded-lg w-full py-12 p-4 bg-white text-center flex flex-col items-center justify-center space-y-2" style={{ color: color.toHex() }}>
          <p className="text-2xl font-bold">Lorem Ipsum</p>
          <p className="text-base font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm font-thin">Quisque varius fringilla dolor ut viverra.</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-xs font-medium">
            Contrast:
            {' '}
            {contrastBlack}
          </p>
          <div className="space-x-2 whitespace-nowrap">
            <span className={`${readableAABlack ? passColors : failColors}inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium `}>
              WCAG AA
            </span>
            <span className={`${readableAAABlack ? passColors : failColors}inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium `}>
              WCAG AAA
            </span>
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
