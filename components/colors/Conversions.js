export default function Colorspaces({ color }) {
  const formatObject = (obj, name) => {
    const colorObj = obj;
    if (color.alpha() === 1) {
      if (name === 'LAB') {
        delete colorObj.alpha;
      } else if (name !== 'RGBA') {
        delete colorObj.a;
      }
    }
    return Object.values(colorObj).join(', ');
  };
  return (
    <div className="bg-white border overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:p-0 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x">
        <dl className="divide-y">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Hex</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{color.toHex()}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">RGB</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toRgb())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">RGBA</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toRgb(), 'RGBA')}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">HSL</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toHsl())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">HSV</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toHsv())}</dd>
          </div>
        </dl>
        <dl className="divide-y">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">CMYK</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toCmyk())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">HWB</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toHwb())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">XYZ</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toXyz())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">LCH</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toLch())}</dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">LAB</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 sm:text-right">{formatObject(color.toLab(), 'LAB')}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
