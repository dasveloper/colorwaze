import Link from 'next/link';

export default function Palette({ colors }) {
  return (
    <div className="flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border">
      {colors.map((c) => {
        const hex = c.toHex();
        return <div key={hex} className={`${c.isLight() ? 'text-gray-900' : 'text-white'} flex-none h-12 sm:flex-1 sm:h-20`} style={{ backgroundColor: hex }}><Link href={`/colors/${hex.replace('#', '')}`}><a className="flex items-center justify-center h-full w-full"><span className="text-xs">{hex}</span></a></Link></div>;
      })}
    </div>
  );
}
