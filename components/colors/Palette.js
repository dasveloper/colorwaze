import { colord } from 'colord';
import Link from 'next/link';

export default function Palette({ colors }) {
  console.log(colors);
  return (
    <div className="flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border border-gray-300">
      {colors.map((c) => {
        const color = colord(c);
        const hex = color.toHex();
        return <div key={hex} className={`${color.isLight() ? 'text-gray-900' : 'text-white'} flex-none h-12 sm:flex-1 sm:h-20 group`} style={{ backgroundColor: hex }}><Link href={`/colors/${hex.replace('#', '')}`}><a className="flex items-center justify-center h-full w-full"><span className="text-xs invisible group-hover:visible uppercase">{hex}</span></a></Link></div>;
      })}
    </div>
  );
}
