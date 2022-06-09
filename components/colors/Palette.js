import { colord } from 'colord';
import Link from 'next/link';

export default function Palette({ colors }) {
  return (
    <div className="flex w-full rounded-lg overflow-hidden border border-gray-300">
      {colors.map((c) => {
        const color = colord(c);
        const hex = color.toHex();
        return (
          <div key={hex} className={`${color.isLight() ? 'text-gray-900' : 'text-white'} flex-1 h-28 group hover:basis-20 transition-all overflow-hidden`} style={{ backgroundColor: hex }}>
            <Link href={`/colors/${hex.replace('#', '')}`}>
              <a className="flex items-center justify-center h-full w-full">
                <span className="text-base invisible group-hover:visible uppercase font-medium">{hex}</span>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
