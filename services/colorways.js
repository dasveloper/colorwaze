import clientPromise from '@utils/mongodb';

export const createColorway = async ({ name, colors, owner }) => {
  const client = await clientPromise;
  const db = await client.db();
  const colorway = await db.collection('colorways').insertOne({
    name, colors, owner,
  });
  return colorway;
};

export const foo = () => 'foo';
