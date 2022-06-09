import { useSession } from 'next-auth/react';

export default function MePage() {
  const { data } = useSession();

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';
// import ColorPicker from '@components/ColorPicker';
// import { useRouter } from 'next/router';
// import { colord, random } from 'colord';
// import colorPalettes from 'nice-color-palettes/1000';
// import clientPromise from '@utils/mongodb';
// const router = useRouter();
// const [hex, setHex] = useState('#fff');
// const [hover, setHover] = useState(false);

// const onSubmit = () => {
//   router.push(`/colors/${hex.replace('#', '')}`);
// };
// useEffect(() => {
//   setHex(random().toHex());
// }, []);

// const color = colord(hex);
// const hoverColor = color.isLight() ? color.darken(0.1).toHex() : color.lighten(0.1).toHex();
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// export async function getServerSideProps({ req, res }) {
//   const mapPalettes = colorPalettes.map((c) => ({ colors: c, createdAt: randomDate(new Date(2020, 0, 1), new Date()) }));

//   const client = await clientPromise;
//   const db = await client.db();
//   await db.collection('palettes').insertMany(mapPalettes);

//   return {
//     props: {},
//   };
// }

// <div className="max-w-lg mx-auto flex flex-col items-center justify-center space-y-6">
//   <div className="flex-none w-full">
//     <ColorPicker color={hex} onChange={setHex} />
//   </div>
//   <button
//     type="button"
//     onClick={onSubmit}
//     onMouseEnter={() => {
//       setHover(true);
//     }}
//     onMouseLeave={() => {
//       setHover(false);
//     }}
//     className={`${color.isLight() ? 'text-gray-900' : 'text-white'} inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
//     style={{
//       backgroundColor: hover ? hoverColor : color.toHex(),
//     }}
//   >
//     Explore
//     {' '}
//     {color.toHex()}
//   </button>
// </div>;
