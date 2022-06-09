import clientPromise from '@utils/mongodb';
import MongoPaging from 'mongo-cursor-pagination';

export const createPalette = async ({ name, colors, owner }) => {
  const client = await clientPromise;
  const db = await client.db();
  const palette = await db.collection('palettes').insertOne({
    name, colors, owner,
  });
  return palette;
};

export const getPalettes = async ({ next, limit }) => {
  const client = await clientPromise;
  const db = await client.db();
  const palettes = await MongoPaging.find(db.collection('palettes'), {
    limit,
    next,
  });

  return palettes;
};

export const foo = () => 'foo';
