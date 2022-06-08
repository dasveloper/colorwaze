export default function ColorHero({ color }) {
  return (
    <div className={`${color.isLight() ? 'text-gray-900' : 'text-white'} h-48 rounded-lg flex flex-col items-center justify-center border space-y-2`} style={{ backgroundColor: color.toHex() }}>
      <span className="text-xl sm:text-2xl lg:text-3xl font-bold">{color.toHex()}</span>
      <span className="text-md sm:text-lg lg:text-xl">{color.toRgbString()}</span>
    </div>
  );
}
