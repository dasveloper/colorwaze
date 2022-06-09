import clientPromise from '@utils/mongodb';

export const createPalette = async ({ name, colors, owner }) => {
  const client = await clientPromise;
  const db = await client.db();
  const palette = await db.collection('palettes').insertOne({
    name, colors, owner,
  });
  return palette;
};

export const getPalettes = async ({ skip, limit }) => {
  const client = await clientPromise;
  const db = await client.db();
  console.log(skip, limit);
  const palettes = await db.collection('palettes').find().sort({ createdAt: 1 }).skip(skip)
    .limit(limit)
    .toArray();
  return palettes;
};

export const foo = () => 'foo';
