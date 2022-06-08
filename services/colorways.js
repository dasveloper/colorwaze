import clientPromise from '@utils/mongodb';

export const createColorway = async () => {
  const client = await clientPromise;
  const db = await client.db();
  const colorway = await db.collection('colorways').insertOne({
    test: 'foobar',
  });
  return colorway;
};

export const foo = () => 'foo';
